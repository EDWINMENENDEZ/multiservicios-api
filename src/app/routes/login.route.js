module.exports = router =>{
    const usuario = require("../controller/usuario.controller.js");
    var api = require("express").Router();

    api.get("/:usuario/:password",usuario.findLogin);

    router.use("/api/login",api);
}