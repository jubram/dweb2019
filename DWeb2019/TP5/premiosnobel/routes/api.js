var express = require('express');
var router = express.Router();

var Prizes = require('../controllers/prizes');

router.get('/prizes', function(req, res) {
    if(req.query.category) {
        Prizes.consultarCategoria(req.query.category)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else if(req.query.category && req.query.date) {
        Prizes.consultarData(req.query.category, req.query.date)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    } else {
        Prizes.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
});

router.get('/prizes/:idPrize', function(req, res) {
    Prizes.consultar(req.params.idPrize)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/categories', function(req, res) {
    Prizes.listarCategorias()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/laureates', function(req, res) {
    Prizes.listarLaureados()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;