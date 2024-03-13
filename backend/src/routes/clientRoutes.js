const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Funções de validação com o meu querido REGEX
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    var re = /^\d+$/;
    return re.test(phone);
}

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

    // Validações
    if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }
    if (!validatePhone(phone)) {
      return res.status(400).json({ error: 'Telefone inválido' });
    }

    const newClient = await pool.query(
      'INSERT INTO clients (name, email, phone, x, y) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, x, y]
    );
    res.json(newClient.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
