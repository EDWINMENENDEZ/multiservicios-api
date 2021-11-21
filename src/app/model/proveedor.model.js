module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define("proveedor", {
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      dpi:{
        type: Sequelize.STRING
      },
      nit:{
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      empresa: {
        type: Sequelize.STRING
      }
    });
  
    return Proveedor;
  };