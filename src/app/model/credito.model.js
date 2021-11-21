module.exports = (sequelize, Sequelize) => {
    const Credito = sequelize.define("credito", {
      fechainicial: {
        type: Sequelize.DATE
      },
      fechafinal: {
        type: Sequelize.DATE
      },
      valor:{
        type: Sequelize.DECIMAL
      },
      descripcion: {
        type: Sequelize.STRING
      }
    });
  
    return Credito;
  };