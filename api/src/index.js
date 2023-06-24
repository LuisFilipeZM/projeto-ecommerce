const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Configurar o CORS antes das rotas
app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Servidor ouvindo na porta 3333');
});
