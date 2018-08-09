'use strict';

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body,
        testando: "Crediário Via+"
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};