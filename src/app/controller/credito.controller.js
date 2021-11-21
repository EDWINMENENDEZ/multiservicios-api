const db = require("../model");
const Obj = db.credito;
const Cliente = db.cliente;
const TipoCredito = db.tipocredito;
const Op = db.Sequelize.Op;
 

exports.create=(req, res) =>{

    if (!req.body.fechainicial) {
        res.status(400).send({
          message: "El campo Fecha Inicial es obligatorio."
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
        fechainicial: req.body.fechainicial,
        fechafinal: req.body.fechafinal,
        valor: req.body.valor,
        descripcion: req.body.descripcion,
        clienteId: req.body.clienteId,
        tipocreditoId: req.body.tipocreditoId
          
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
    Obj.findAll({include:[{model:Cliente},{model:TipoCredito}]})
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
  
    Obj.findByPk(id,{include:[{model:Cliente},{model:TipoCredito}]})
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
    const clienteId = req.params.clienteId;
  
    Obj.findAll({ where:{clienteId:clienteId}, include:[{model:Cliente},{model:TipoCredito}]})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al buscar con el codigo id=" + id
        });
      });
  };
  


  exports.findOneTipoCreditoId = (req, res) => {
    const tipocreditoId = req.params.tipocreditoId;
    
    Obj.findAll({where:{tipocreditoId:tipocreditoId},include:[{model:Cliente},{model:TipoCredito}]})
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