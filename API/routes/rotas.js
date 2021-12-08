const express = require('express');
const produtosRouter = require('./produtos');
const usuariosRouter = require('./usuarios');

const router = express.Router();

router.get('/', (req, res) => res.send( "Teste")); //Criar a rota principal


router.use('/produtos', produtosRouter)
router.use('/usuarios', usuariosRouter)

module.exports = router;