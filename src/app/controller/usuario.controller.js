const db = require("../model");
const Obj = db.usuario;
const Op = db.Sequelize.Op;
 

const jwt = require('jsonwebtoken');


  exports.findLogin = (req, res) => {
    const usuario = req.params.usuario;
    const password = req.params.password;

    /*
    Obj.findAll({ where:[{usuario:usuario},{contraseña:contraseña}]
      ,attributes:['id','nombre','apellido','usuario','telefono','direccion']}
                )*/
    Obj.findAll({ where:[{usuario:usuario},{password:password}],include:'tipousuario'})
      .then(data => {
        if(data.length > 0){
          const token = jwt.sign({data},'@L3x');         
          res.json({token});
        }else{
          res.status(500).json({"mensaje":"Usuario No autorizado"})
        }
        
      })
      .catch(err => {
        res.status(500).send({
          message: "Error encontrado en el objeto con los datos usaurio=" + usuario +" and contraseña="+contraseña
        });
      });
  };


exports.create=(req, res) =>{

    if (!req.body.nombre) {
        res.status(400).send({
          message: "El Campo Nombre es obligatorio."
        });
        return;
      }

      if (!req.body.usuario) {
        res.status(400).send({
          message: "El Campo Usuario es obligatorio."
        });
        return;
      }

      if (!req.body.password) {
        res.status(400).send({
          message: "El campo Contraseña es obligatorio."
        });
        return;
      }

      
      const _Obj = {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          usuario: req.body.usuario,
          password: req.body.contraseña,
          telefono: req.body.telefono,
          direccion: req.body.direccion,
          tipousuarioid: req.body.tipousuarioid
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
    Obj.findAll({include:'tipousuario'})
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
  
    Obj.findByPk(id,{include:'tipousuario'})
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



  