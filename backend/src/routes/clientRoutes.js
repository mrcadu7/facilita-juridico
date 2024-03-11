// Importando o pacote express
const express = require('express');
// Criando um novo roteador
const router = express.Router();

// Importando o pool de conexões do banco de dados
const pool = require('../config/db');

// Rota para listar os clientes
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clients');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Rota para cadastrar um novo cliente
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, x, y } = req.body;
    const newClient = await pool.query(
      'INSERT INTO clients (name, email, phone, x, y) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, x, y]
    );
    res.json(newClient.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Exportando o roteador
module.exports = router;