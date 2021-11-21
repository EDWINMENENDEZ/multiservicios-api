module.exports = (sequelize, Sequelize) => {
    const TipoMovimiento = sequelize.define("tipomovimiento", {
      descripcion: {
        type: Sequelize.STRING
      },
      signo:{
        type: Sequelize.STRING
      },
      credito:{
        type: Sequelize.BOOLEAN
      }
    });
  
    return TipoMovimiento;
  };