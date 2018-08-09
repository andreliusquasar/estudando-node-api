'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conexao com o banco
mongoose.connect('string de conexao');

// Carregar Rotas
const indexRoutes   = require('./routes/index-routes');
const productRoutes = require('./routes/product-routes');

// Utilizando o body-parser como um midway - init
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Utilizando o body-parser como um midway - end



// Utilizando as rotas
app.use("/", indexRoutes);
app.use('/products', productRoutes);

module.exports = app;