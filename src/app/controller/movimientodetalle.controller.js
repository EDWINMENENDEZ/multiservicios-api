const db = require("../model");
const Obj = db.movimientodetalle;
const Movimiento = db.movimiento;
const Articulo = db.articulo;
const Op = db.Sequelize.Op;
 

exports.create=(req, res) =>{

    if (!req.body.cantidad) {
        res.status(400).send({
          message: "El campo Cantidad es obligatorio."
        });
        return;
      }

      if (!req.body.valor) {
        res.status(400).send({
          message: "El campo Valor es obligatorio."
        });
        return;
      }

      
      
      const _Obj = {
          cantidad: req.body.cantidad,
          valor: req.body.valor,
          articuloid: req.body.articuloid,
          movimientoid: req.body.movimientoid
      }

      Obj.create(_Obj)
      .then(data =>{res.json(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
              err.message || "Ocurruio un error al crear objeto."
        });
    });

};

exports.findAll =  (req, res) => {
    Obj.findAll({include:[{model:Articulo},{model:Movimiento}]})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
              err.message || "Ocurruio un error al buscar objeto."
            });
          });
  };

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Obj.findByPk(id,{include:[{model:Articulo},{model:Movimiento}]})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al buscar con el codigo id=" + id
        });
      });
  };

  exports.findOneMovimientoId = (req, res) => {
    const movimientoid = req.params.movimientoid;
  
    Obj.findAll({where:{movimientoid:movimientoid},include:[{model:Articulo},{model:Movimiento}]})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al buscar con el codigo id=" + id
        });
      });
  };

  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Obj.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Registro actualizado correctamente."
          });
        } else {
          res.send({
            message: `No se puede actualizar el bojeto con id=${id}. puede que el envio del cuerpo este vacio!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error durante la actualizacion id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Obj.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Registro eliminado correctamente!"
          });
        } else {
          res.send({
            message: `No se pudo eliminar el registro con id=${id}. puede que el objeto no exista!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
            message: "Error durante el borrado id=" + id
        });
      });
  };  