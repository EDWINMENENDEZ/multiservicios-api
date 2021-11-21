const db = require("../model");
const Obj = db.movimiento;
const Usuario = db.usuario;
const Cliente = db.cliente;
const Proveedor = db.proveedor;
const TipoPago = db.tipopago;
const TipoMovimiento = db.tipomovimiento;

const Op = db.Sequelize.Op;
 

exports.create=(req, res) =>{

    if (!req.body.fecha) {
        res.status(400).send({
          message: "El campo Fecha es obligatorio."
        });
        return;
      }

      const _Obj = {
          fecha: req.body.fecha,
          tipomovimientoid: req.body.tipomovimientoid,
          tipopagoid: req.body.tipopagoid,
          clienteid: req.body.clienteid,
          proveedorid: req.body.proveedorid,
          usuarioid:req.body.usuarioid
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
    Obj.findAll({include:[{model:Usuario},{model:TipoMovimiento},{model:TipoPago},{model:Cliente},{model:Proveedor}]})
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
  
    Obj.findByPk(id,{include:[{model:Usuario},{model:TipoMovimiento},{model:TipoPago},{model:Cliente},{model:Proveedor}]})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al buscar con el codigo id=" + id
        });
      });
  };

  exports.findOneClienteId = (req, res) => {
    const clienteid = req.params.clienteid;
  
    Obj.findAll({where:{clienteid:clienteid},include:[{model:Usuario},{model:TipoMovimiento},{model:TipoPago},{model:Cliente},{model:Proveedor}]})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al buscar con el codigo id=" + id
        });
      });
  };


  exports.findOneProveedorId = (req, res) => {
    const proveedorid = req.params.proveedorid;
  
    Obj.findAll({where:{proveedorid:proveedorid},include:[{model:Usuario},{model:TipoMovimiento},{model:TipoPago},{model:Cliente},{model:Proveedor}]})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al buscar con el codigo id=" + id
        });
      });
  };

  exports.findOneTipoPagoId = (req, res) => {
    const tipopagoid = req.params.tipopagoid;
  
    Obj.findAll({where:{tipopagoid:tipopagoid},include:[{model:Usuario},{model:TipoMovimiento},{model:TipoPago},{model:Cliente},{model:Proveedor}]})
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
  
    Obj.findAll({where:{tipomovimientoid:tipomovimientoid},include:[{model:Usuario},{model:TipoMovimiento},{model:TipoPago},{model:Cliente},{model:Proveedor}]})
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