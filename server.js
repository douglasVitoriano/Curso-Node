const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
const mongoDB = 'mongodb://localhost:27017/nodeapi';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);