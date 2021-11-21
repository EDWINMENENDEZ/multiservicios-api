const {Router} = require('express');
const router = Router();



router.get("/", (req,res) => {
    res.json({"autor":"Edwin Alexander Menèndez Castillo",
            "carnet":"0394-07-4387"
            });
});


require('./usuario.route')(router)
require('./tipousuario.route')(router)
require('./tipopago.route')(router)

require('./tipomovimiento.route')(router)
require('./tipocredito.route')(router)
require('./tipocliente.route')(router)
require('./proveedor.route')(router)
require('./cliente.route')(router)
require('./articulo.route')(router)

require('./credito.route')(router)

require('./creditodetalle.route')(router)

require('./movimiento.route')(router)
require('./movimientodetalle.route')(router)

require('./login.route')(router)

module.exports = router;