module.exports = (sequelize, Sequelize) => {
    const TipoCliente = sequelize.define("tipocliente", {
      descripcion: {
        type: Sequelize.STRING
      },
      interes: {
        type: Sequelize.DECIMAL
      }, 
      monto: {
        type: Sequelize.DECIMAL
      },
      clasificacion: {
        type: Sequelize.STRING
      }
    });
  
    return TipoCliente;
  };