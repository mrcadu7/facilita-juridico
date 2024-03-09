const pool = require('../config/db');

// pega todos os clients
const getClients = async () => {
  const result = await pool.query('SELECT * FROM clients');
  return result.rows;
};

// Função para criar um novo cliente
const createClient = async (name, email, phone) => {
  const result = await pool.query(
    'INSERT INTO clients (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
    [name, email, phone]
  );
  return result.rows[0];
};

// Exportando as funções
module.exports = {
  getClients,
  createClient,
};
