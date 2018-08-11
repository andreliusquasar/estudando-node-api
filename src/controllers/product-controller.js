'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product.find({active: true}, 'title price slug')
            .then(data => {
                res.status(200).send(data);
            }).catch(error => {
                res.status(400).send(error);
            });
};

exports.getBySlug = (req, res, next) => {
    // Quando se utiliza somente find, retorna um array
    // Product.find({
    
    // Para retornar um objeto, utilizar findOne 2018-859-469-083
    Product.findOne({
        slug: req.params.slug,
        active: true
    }, 'title description price slug tags')
    .then(data => {
        res.status(200).send(data);
    }).catch(error => {
        res.status(400).send(error);
    })
};

exports.getById = (req, res, next) => {
    Product.findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(400).send(error);
        });
};

exports.post = (req, res, next) => {
    var product = new Product(req.body);//Dessa forma é perigoso, pois vc pode passar valores que não deveria
    // product.title = ''; Desse forma vc especifica o que passar para o DB
    product.save().then(resolve=> {
        console.log('Post 201');
        res.status(201).send(req.body);
    }).catch(error=> {
        console.log('erro 400')
        res.status(400).send({message: 'Erro ao cadastrar', data: error});
    });
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