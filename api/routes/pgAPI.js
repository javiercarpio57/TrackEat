var express = require('express');
var router = express.Router();
const pool = require("./poolconfig.js");

let connection_proof = "___No conecto :/ chale";
pool.on('connect', client =>{
    connection_proof = "Si conecto soy el papa de Gustavo x2"
})

var puntos = 0;

router.get("/email/:email/password/:password/image/:image/name/:name",function(req, res, next){
    next();
}, function(req, res) {

  const params = req.params
  const email = params.email;
  const password = params.password;
  const name = params.name;
  const image = params.image;
  const query = { text: 'INSERT INTO usuario(nombre,email,password,image, puntos) VALUES($1, $2, $3, $4, 0) RETURNING *' ,
  values: [name, email, password, image] }
  const response = res;
  pool.query(query, (err, res) => {
    if(err) {
      response.send(err.stack)
    } else { 
      response.send(res.rows[0])
    }
  })
})

/*
    obtener informacion de un usuario 
 */

router.get("/password/:password/email/:email",function(req, res, next){
  next();
}, function(req, res) {

  const params = req.params
  const email = params.email;
  const password = params.password;
  const query = { text: 'SELECT * FROM usuario WHERE email = $1 and password = $2' ,
  values: [email, password] }
  const response = res;
  pool.query(query, (err, res) => {
    if(err) {
      response.send(err.stack)
    } else { 

      response.send(res.rows[0])
    }
  })
})

obtenerPuntos = function(id) {
  const query ={ text: 'SELECT puntos FROM usuario where id = $1',
  values: [id]}
  pool.query(query, (err, res) =>{
    if(err) {
      return err.stack;
    } else {
      puntos = res.rows[0].puntos
      return res.rows[0];
    }
  })
}

/*
    obtener informacion de un usuario 
 */

router.get("/getAllUsers",function(req, res, next){
  next();
}, function(req, res) {
  const query = { text: 'SELECT * FROM usuario' }
  const response = res;
  pool.query(query, (err, res) => {
    if(err) {
      response.send(err.stack)
    } else { 
      response.send(res.rows)
    }
  })
})

incrementarPuntos = function(id, puntos){
  const query = {text: 'UPDATE usuario SET puntos = $1 WHERE id = $2',
  values:[puntos, id]}
  pool.query(query, (err, res)=>{
    if(err) {
      console.log('my bad')
    } else {
      console.log("viva la vida loca")
    }
  })
}
/*
  Ingresar id para orden el usuario
*/

router.get("/id/:id/idusr/:idusr",function(req, res, next){
  next();
}, function(req, res) {

  const params = req.params
  const id = params.id;
  const iduser = params.idusr;
  const query = { text: 'UPDATE orden SET idusr = $1 WHERE id = $2 RETURNING *' ,
  values: [iduser, id] }
  const response = res;

  pool.query(query, (err, res) => {
    if(err) {
      response.send(err.stack)
    } else { 
      obtenerPuntos(iduser);
      console.log(puntos);
      const newPuntos = puntos + res.rows[0].puntos
      console.log(newPuntos)
      incrementarPuntos(iduser, newPuntos)
      response.send(res.rows[0])

    }
  })
})


module.exports = router;
