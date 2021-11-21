const jwt = require("jsonwebtoken");

module.exports = router =>{
    const usuario = require("../controller/usuario.controller.js");
    var api = require("express").Router();

    api.post("/",ensureToken, usuario.create);
    api.get("/",ensureToken,usuario.findAll);
    api.get("/:id",ensureToken,usuario.findOne);
    api.put("/:id",ensureToken,usuario.update);
    api.delete("/:id",ensureToken,usuario.delete);

    router.use("/api/usuario",api);
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