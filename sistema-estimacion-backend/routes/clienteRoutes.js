const express = require('express');
const { getClientes, createCliente } = require('../controllers/clienteController');

const router = express.Router();

console.log('Cargando rutas de clientes...');

router.get('/clientes', (req, res) => {
  console.log('Ruta GET /clientes ejecutada');
  getClientes(req, res);
});

router.post('/clientes', (req, res) => {
  console.log('Ruta POST /clientes ejecutada');
  createCliente(req, res);
});

module.exports = router;
