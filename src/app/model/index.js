
const Sequelize = require("sequelize");

//CADENAS DE CONEXION PARA LA BASE DE DATOS
/*
//DB Heroku
const sequelize = new Sequelize({
  database: "d9j5v3466ida1j",
  username: "utpedahkltjljj",
  password: "6d47756a1bbf15d8b61d91783ee73982504555302fe4f0df46f0aa9cd3396c63",
  host: "ec2-18-209-143-227.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  }
});
*/
///*
//Local
const sequelize = new Sequelize({
  database: "dbmultiservicios",
  username: "postgres",
  password: "1234",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  
  pool: {
    max:10,
        min:0,
        acquire:30000,
        idle:10000
  }
});
//*/


const db = {};
//se obtiene las propiedades y functionalidades.
db.Sequelize = Sequelize;
//util para definir los objetos.
db.sequelize = sequelize;


db.usuario= require("./usuario.model")(sequelize,Sequelize);

db.tipocliente = require("./tipocliente.model")(sequelize,Sequelize);
db.tipomovimiento = require("./tipomovimiento.model")(sequelize,Sequelize)
db.tipopago = require("./tipopago.model")(sequelize,Sequelize);
db.tipocredito = require("./tipocredito.model")(sequelize,Sequelize);
db.tipousuario = require("./tipousuario.model")(sequelize,Sequelize);
db.cliente = require("./cliente.model")(sequelize,Sequelize);
db.proveedor = require("./proveedor.model")(sequelize,Sequelize);
db.articulo = require("./articulo.model")(sequelize,Sequelize);
db.movimiento = require("./movimiento.model")(sequelize,Sequelize);
db.movimientodetalle = require("./movimientodetalle.model")(sequelize,Sequelize);
db.credito = require("./credito.model")(sequelize,Sequelize);
db.creditodetalle = require("./creditodetalle.model")(sequelize,Sequelize);


//Relaciones
db.tipousuario.hasMany(db.usuario);
db.usuario.belongsTo(db.tipousuario);

db.tipomovimiento.hasMany(db.movimiento);
db.movimiento.belongsTo(db.tipomovimiento);

db.tipopago.hasMany(db.movimiento);
db.movimiento.belongsTo(db.tipopago);

db.cliente.hasMany(db.movimiento);
db.movimiento.belongsTo(db.cliente);

db.proveedor.hasMany(db.movimiento);
db.movimiento.belongsTo(db.proveedor);

db.usuario.hasMany(db.movimiento);
db.movimiento.belongsTo(db.usuario);

db.movimiento.hasMany(db.movimientodetalle);
db.movimientodetalle.belongsTo(db.movimiento);

db.articulo.hasMany(db.movimientodetalle);
db.movimientodetalle.belongsTo(db.articulo);

db.tipocliente.hasMany(db.cliente);
db.cliente.belongsTo(db.tipocliente);

db.cliente.hasMany(db.credito);
db.credito.belongsTo(db.cliente);

db.tipocredito.hasMany(db.credito);
db.credito.belongsTo(db.tipocredito);

db.credito.hasMany(db.creditodetalle);
db.creditodetalle.belongsTo(db.credito);

db.tipomovimiento.hasMany(db.creditodetalle);
db.creditodetalle.belongsTo(db.tipomovimiento);


module.exports = db;