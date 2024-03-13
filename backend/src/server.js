const express = require('express');
const cors = require('cors');
const clientRoutes = require('./routes/clientRoutes');
const routeCalculator = require('./routes/routeCalculator');
const dbSetup = require('./config/dbSetup');


const app = express();

dbSetup(); 

// Usando o middleware do express para parsear o corpo das requisições como JSON
app.use(express.json());

// Usando o middleware cors. IMPORTANTÍSSIMO!
app.use(cors());

app.use('/api/clients', clientRoutes);

app.use('/api/routeCalculator', routeCalculator);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});