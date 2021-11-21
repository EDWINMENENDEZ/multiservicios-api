module.exports = (sequelize, Sequelize) => {
    const CreditoDetalle = sequelize.define("creditodetalle", {
      fecha: {
        type: Sequelize.DATE
      },
      valor:{
        type: Sequelize.DECIMAL
      }
    });
  
    return CreditoDetalle;
  };