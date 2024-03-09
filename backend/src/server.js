// Importando o pacote express
const express = require('express');
// Importando as rotas dos clientes
const clientRoutes = require('./routes/clientRoutes');

// Criando uma nova instância do express
const app = express();

// Usando o middleware do express para parsear o corpo das requisições como JSON
app.use(express.json());
// Usando as rotas dos clientes no caminho '/api/clients'
app.use('/api/clients', clientRoutes);

// Adicionando uma rota para '/'
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});