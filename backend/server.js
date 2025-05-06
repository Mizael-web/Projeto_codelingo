// server.js
require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados.');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
