module.exports = (sequelize, Sequelize) => {
    const TipoCredito = sequelize.define("tipocredito", {
      descripcion: {
        type: Sequelize.STRING
      }
    });
  
    return TipoCredito;
  };