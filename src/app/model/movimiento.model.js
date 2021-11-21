module.exports = (sequelize, Sequelize) => {
    const Movimiento = sequelize.define("movimiento", {
      fecha: {
        type: Sequelize.DATE
      }
    });
  
    return Movimiento;
  };