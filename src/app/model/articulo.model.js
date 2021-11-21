module.exports = (sequelize, Sequelize) => {
    const Articulo = sequelize.define("articulo", {
      descripcion: {
        type: Sequelize.STRING
      },
      valorventa: {
        type: Sequelize.DECIMAL
      },
      valorcompra:{
        type: Sequelize.DECIMAL
      },
      cantidad: {
        type: Sequelize.INTEGER 
      }
    });
  
    return Articulo;
  };