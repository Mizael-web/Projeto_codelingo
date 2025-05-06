// app.js
const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use('/api', userRoutes);

app.use(errorHandler);

module.exports = app;
