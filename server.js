'use strict'

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

const server = http.createServer(app);
const router = express.Router();


// Configurando primeira rota
var route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Minha API Node",
        version: "0.0.1"
    });
});
app.use('/', route);

server.listen(port);
console.log('Subindo a aplicação', port);

// Normalizando uma porta para não ficar fixa
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}