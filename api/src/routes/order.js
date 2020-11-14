const server = require('express').Router();
const { Order,Product,User, } = require('../db.js');

//Ruta que incluye los modelos en la lista del 
// Frontend con direccion en componente orderTables.js
// con path en http://localhost:3000/dashboard/users/list
// Se actualizaron los modelos 
// Se le agrego catch
server.get('/', (req, res) => {
    Order.findAll({
        include: [

                {
                  model: Product,
                  as: "products",
                  attributes: [ "name", "description", "stock", "price"],
                },
                {
                    model: User,
                    as:"user",
                    attributes: ["name" , "username"]
                }
              ],
    })
    .then((r) => res
    .status(200).send(r))
    .catch(() => {
        return res.status(400).send("Error No se encontraron Ordenes Registradas");
    })
});

//S44- agrega filtro por state si es enviado por query
server.get('/search', (req, res) => {
    let state = req.query.state
    Order.findAll({where:{state:state},
        include: [

                {
                  model: Product,
                  as: "products",
                  attributes: [ "name", "description", "stock", "price"],
                },
                {
                    model: User,
                    as:"user",
                    attributes: ["name" , "username"]
                }
              ],
    })
    .then((r) => res
    .status(200).json(r))
});

// Ruta que Busca por id
// Se modifico la Ruta agregando modelos al include
// Se le agrega Catch
server.get('/:id', (req, res) => {
    let id = req.params.id
    Order.findAll({where:{id:id},
        include: [

                {
                  model: Product,
                  as: "products",
                  attributes: [ "name", "description", "stock", "price"],
                },
                {
                    model: User,
                    as:"user",
                    attributes: ["name" , "username"]
                }
              ],
    })
    .then((r) => res
    .status(200).json(r))
    .catch(() => {
        return res.status(400).send("Error No se encontro orden con ese ID");
    })

});

// S47 : Crear Ruta para modificar una Orden
//esta ruta recibe una orden por params y en base al id setea su estado a cancelado 
//testeadas con postman, funcionando  


server.put('/modify/cancel/:id', (req, res) => {
    Order.findOne({
            where: {
                id: req.params.id,
            }
        }).then(orden => {
            orden.update({
                state: 'CANCELLED',
            })
        })
        .then(() => {
            return res.send("se Cancela La Orden")
                   
        })
        .catch(() => {
            return res.status(400).send("Error No se ha podido Cancelar  La orden ");
        })
});






module.exports = server;