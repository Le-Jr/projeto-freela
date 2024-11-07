const express = require('express');
const paginaInicial = require("../controllers/paginaInicial");
const trabalheConoscoController = require('../controllers/trabalheConoscoControler');

const router = express.Router()
router.get('/',paginaInicial.carregaPage)
router.get('/trabalhe-conosco',trabalheConoscoController.carregaPage)
router.post('/trabalhe-conosco',trabalheConoscoController.saveAluno)

router.get('/show',trabalheConoscoController.show)



module.exports= router