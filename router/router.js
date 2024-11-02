const express = require('express');
const paginaInicial = require("../controllers/paginaInicial");
const trabalheConoscoController = require('../controllers/trabalheConoscoControler');
const stackController = require("../controllers/stackController")

const router = express.Router()
router.get('/',paginaInicial.carregaPage)
router.get('/trabalhe-aqui',trabalheConoscoController.carregaPage)
router.post('/trabalhe-aqui',trabalheConoscoController.saveAluno)

router.get('/stacks',stackController.carregaPage)
router.post('/stacks',stackController.saveStack)

module.exports= router