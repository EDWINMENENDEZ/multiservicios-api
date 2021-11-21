module.exports = (sequelize, Sequelize) => {
    const MovimientoDetalle = sequelize.define("movimientodetalle", {
      cantidad: {
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.DECIMAL
      }
    });
  
    return MovimientoDetalle;
  };