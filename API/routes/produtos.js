
const express = require('express');
const router = express.Router();
const {produto} = require("../models")
const ProdutoService = require("../services/produtos")
const {body, validationResult,check} = require('express-validator');

const produtoService = new ProdutoService(produto)

router.get('/cadastrar-produto',async(req, res) =>{
    const produtos = await produtoService.get()
    res.status(200).json(produtos)
}); //Criar a rota de cadastro

router.post('/cadastrar-produto',
    //Tratando os erros
    body('nome').not().isEmpty().trim().escape(),
    check('preco')
    .not().isEmpty()
    .withMessage('O campo preço deve ser preenchido')
    .isNumeric().withMessage('O campo preço deve ser preenchido com um número')
    .isFloat({gt: 0}).withMessage('Preço deve ser maior que zero'),
    check('quantidade')
    .not().isEmpty()
    .withMessage('O campo quatidade deve ser preenchido')
    .isNumeric().withMessage('O campo preço deve ser preenchido com um número')
    .isInt({gt: 0}).withMessage('Quantidade deve ser maior que zero'),
    check('imagem')
    .not().isEmpty()
    .withMessage('O campo Imagem deve ser preenchido'),



    async(req,res) => {
        //Mostrando os erros caso houver
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {nome,descricao,marca,preco,quantidade,categoria,imagem} = req.body
        try {
            await produtoService.adicionar({nome,descricao,marca,preco,quantidade,categoria,imagem})
        
            res.status(201).send("Produto adicionado com sucesso")
        } catch (error) {
            res.status(400).send(error.message)
            
        }
   
})

router.patch('/editar-produto', 
    check('id')
        .not().isEmpty()
        .withMessage('O campo id_produto deve ser preenchido')
        .isNumeric().withMessage('O campo id deve ser preenchido com um número')
        .isInt({gt: 0}).withMessage('id do produto deve ser maior que zero'),
    async(req, res) => {
    const {id,nome,descricao,marca,preco,quantidade,categoria,imagem} = req.body
    try {
        await produtoService.atualizar(id,{nome,descricao,marca,preco,quantidade,categoria,imagem})
        res.status(201).send("Produto editado com sucesso")
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete('/deletar-produto',

    check('id')
        .not().isEmpty()
        .withMessage('O campo id_produto deve ser preenchido')
        .isNumeric().withMessage('O campo id deve ser preenchido com um número')
        .isInt({gt: 0}).withMessage('id do produto deve ser maior que zero'),
        

    


    async(req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let id = req.body.id
        try {
            await produtoService.deletar(id)
            
            res.status(201).send("Produto deletado com sucesso")
        } catch (error) {
            res.status(400).send(error.message)
}})

module.exports = router
