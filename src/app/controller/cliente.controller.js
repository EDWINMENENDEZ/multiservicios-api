const db = require("../model");
const Obj = db.cliente;
const TipoCliente = db.tipocliente;
const Op = db.Sequelize.Op;
 

exports.create=(req, res) =>{

    if (!req.body.nombre) {
        res.status(400).send({
          message: "El campo Nombre es obligatorio."
        });
        return;
      }

      if (!req.body.dpi) {
        res.status(400).send({
          message: "El campo DPI es obligatorio."
        });
        return;
      }

      if (!req.body.nit) {
        res.status(400).send({
          message: "El campo NIT es obligatorio."
        });
        return;
      }

      if (!req.body.telefono) {
        res.status(400).send({
          message: "El campo Telefono es obligatorio."
        });
        return;
      }

      
      
      const _Obj = {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          dpi: req.body.dpi,
          nit: req.body.nit,
          telefono: req.body.telefono,
          direccion: req.body.direccion,
          correo: req.body.correo,
          tipoclienteId: req.body.tipoclienteId
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
    Obj.findAll({include:'tipocliente'})
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
  
    Obj.findByPk(id,{include:'tipocliente'})
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



  