const server = require("express").Router();
const { User } = require("../db.js");

server.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(400).send("Error en el GET de Usuarios ", err);
    });
});

server.post("/create", (req, res) => {
  const { name, lastname, email, password } = req.body;
  if (name && lastname && email && password) {
    User.create({
      name,
      lastname,
      email,
      password,
    })
      .then((userCreated) => {
        console.log("Usuario creado OK ", userCreated);
        res.send(userCreated);
      })
      .catch((err) => {
        res.status(400).send("Error al crear usuario ", err);
      });
  } else {
    res.status(400).send("Error! campos sin completar");
  }
});

// S37 : Crear Ruta para eliminar Usuario
// filtramos por id y utilizamos el metodo delete 
server.delete('/delete/:id', (req,res)=>{
  const id = req.params.id;
  User.destroy({ where: { id } })
  .then(user => 
  res.status(200).send("se elimino el usuario " + user  ))
  .catch((err) => {
   res.status(400).send(err);
    });
});


// S35 : Crear Ruta para modificar Usuario
// Se validan los campos, se filtra por id y se actualizan los values!
server.put('/:id',(req, res) => {
  const {name,lastname,email,password} = req.body
  if (!name || !lastname  || !email  || !password) {
       res
       .status(400)
       .send("Debes Completar todos Los Campos ")
  }
  User.findByPk(req.params.id)
      .then((user) => {
          user.update({
              name: name,
              lastname: lastname,
              email: email,
              password:password,
          })
      })
      .then(() => {
           res.send('El User ha sido Actualizado');
      })
      .catch((err) => {
        res.status(400).send(err);
         });
});


module.exports = server;
