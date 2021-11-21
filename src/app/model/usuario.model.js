module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      usuario:{
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      }
    });
  
    return Usuario;
  };