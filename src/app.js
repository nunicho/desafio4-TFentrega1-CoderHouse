// DESAFIO 3  -  ALUMNO:   Mauricio Javier Alonso
// Comisión: 55565

const express = require("express");

//El servidor importa el archivo Productos.json que es donde se guardan los productos creados por la clase ProductManager.js
const productos = require("./archivos/productos.json");

const PORT = 3000;

const app = express();


// El servidor cuenta con el endpoint './products'
app.get("/products", (req, res) => {
  // Se agregó el soporte para recibir por query param el valor ?limit=
  const limit = parseInt(req.query.limit) || productos.length;
  // si se recibe un límite se devuelve el número de productos solicitados.
  // Y no se recibe un límite se devuelve el listado de todos los productos
  const limitedData = productos.slice(0, limit);
  res.json({ status: "ok", data: limitedData });
});

//El servidor cuenta con el endpoint './products/:pid'

app.get("/products/:id", (req, res) => {
  let pid = req.params.id; 
  pid = parseInt(pid);
  if (isNaN(pid)) {
    res.json({
      status: "error",
      mensaje: "Require un argumento id de tipo numerico",
    });
    return;
  }
  let resultado = productos.filter((producto) => producto.id === pid); 

  if (resultado.length > 0) {
    res.json({ status: "ok", data: resultado });
  } else {
    res.json({ status: "error", mensaje: `El id ${pid} no existe` });
  }
});


app.get("*", (req, res) => {
  res.send("Error 404 - page not found");
});

app.listen(PORT, () => {
  console.log(`Server corriendo en ${PORT}`);
});
