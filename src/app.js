'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();


/**
 * Utilizando o body-parser como um midway
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



/**
 * Abaixo seguem algumas rotas por hora, depois será refatorado
 */
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Estudando API Nodejs",
        version: "0.0.1"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body,
        testando: 'Crediário Via+'
    });
});

const del = router.delete('/:id', (req, res, next) => {
    res.status(200).send(req.body);
});




app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app;