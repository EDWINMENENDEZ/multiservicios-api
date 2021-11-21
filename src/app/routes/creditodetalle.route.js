const jwt = require("jsonwebtoken");

module.exports = router =>{
    const _Route = require("../controller/creditodetalle.controller");
    var api = require("express").Router();

    api.post("/",ensureToken, _Route.create);
    api.get("/",ensureToken,_Route.findAll);
    api.get("/:id",ensureToken,_Route.findOne);
    api.get("/:tipomovimientoid",ensureToken,_Route.findOneTipoMovimientoId);
    api.get("/:creditoid",ensureToken,_Route.findOneCreditoId);
    api.put("/:id",ensureToken,_Route.update);
    api.delete("/:id",ensureToken,_Route.delete);

    router.use("/api/creditodetalle",api);
}


function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    console.log(bearerHeader)
    if(typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      jwt.verify(bearerToken,'@L3x',(err)=>{
          if(err){
              res.status(403).json({"mensaje":"Token incorrecto"});
          }else{
              next();
          }
      });
    } else {
      res.status(403).json({"mensaje":"Token requerido"});
    }
  }