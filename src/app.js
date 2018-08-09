'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();


// Utilizando o body-parser como um midway - init
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Utilizando o body-parser como um midway - end


// Carregar Rotas
const indexRoutes   = require('./routes/index-routes');
const productRoutes = require('./routes/product-routes');

// Utilizando as rotas
app.use("/", indexRoutes);
app.use('/products', productRoutes);

module.exports = app;