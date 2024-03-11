// Importando o pacote express
const express = require('express');
// Importando o pacote cors
const cors = require('cors');
// Importando as rotas dos clientes
const clientRoutes = require('./routes/clientRoutes');

// Importando as rotas do calculador de rotas
const routeCalculator = require('./routes/routeCalculator');

// Importando o script de configuração do banco de dados
const dbSetup = require('./config/dbSetup');

// Criando uma nova instância do express
const app = express();

// Chamando a função de configuração do banco de dados
dbSetup(); 

// Usando o middleware do express para parsear o corpo das requisições como JSON
app.use(express.json());

// Usando o middleware cors. IMPORTANTÍSSIMO!
app.use(cors());

// Usando as rotas dos clientes no caminho '/api/clients'
app.use('/api/clients', clientRoutes);

// Usando as rotas do calculador de rotas no caminho '/api/routeCalculator'
app.use('/api/routeCalculator', routeCalculator);

// Adicionando uma rota para '/'
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});