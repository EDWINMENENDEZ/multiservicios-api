module.exports = (sequelize, Sequelize) => {
    const TipoPago = sequelize.define("tipopago", {
      descripcion: {
        type: Sequelize.STRING
      }
    });
  
    return TipoPago;
  };