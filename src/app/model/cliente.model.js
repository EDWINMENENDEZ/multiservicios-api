module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      dpi:{
        type: Sequelize.STRING
      },
      nit:{
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      }
    });
  
    return Cliente;
  };