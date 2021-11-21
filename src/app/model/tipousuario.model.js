module.exports = (sequelize, Sequelize) => {
    const TipoUsuario = sequelize.define("tipousuario", {
      descripcion: {
        type: Sequelize.STRING
      }
    });
  
    return TipoUsuario;
  };