const db = require("../model");
const Obj = db.creditodetalle;
const TipoMovimiento = db.tipomovimiento;
const Op = db.Sequelize.Op;
 

exports.create=(req, res) =>{

    if (!req.body.fecha) {
        res.status(400).send({
          message: "El campo Fecha  es obligatorio."
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
        fecha: req.body.fecha,
        valor: req.body.valor,
        tipomovimientoid: req.body.tipomovimientoid,
        creditoid:req.body.creditoid
          
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
    Obj.findAll({include:[{model:TipoMovimiento}]})
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
  
    Obj.findByPk(id,{include:[{model:TipoMovimiento}]})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al buscar con el codigo id=" + id
        });
      });
  };

exports.findOneCreditoId = (req, res) => {
  const creditoid = req.params.creditoid;

  Obj.findAll({where:{creditoid:creditoid},include:[{model:TipoMovimiento}]})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al buscar con el codigo id=" + id
      });
    });
};

  exports.findOneTipoMovimientoId = (req, res) => {
    const tipomovimientoid = req.params.tipomovimientoid;
  
    Obj.findAll({where:{tipomovimientoid:tipomovimientoid},include:[{model:TipoMovimiento}]})
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