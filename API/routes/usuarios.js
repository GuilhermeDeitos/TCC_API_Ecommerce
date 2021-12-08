const express = require('express');
const router = express.Router();
const UsuarioService = require('../services/usuarios');
const {usuario} = require("../models")
const {body, validationResult, check} = require('express-validator');

const usuarioService = new UsuarioService(usuario);

router.get('/login', async(req, res) => {
    const usuarios = await usuarioService.getUsuarios()
    res.status(200).json(usuarios)
}); //Criar a rota de cadastro

router.post('/login', 
    body('nome').not().isEmpty().trim().escape(),
    body('email').isEmail().not().isEmpty(),
    check('senha')
        .not().isEmpty()
        .isLength({ min: 6 })
        .withMessage('A senha deve ter no mínimo 6 caracteres')
        .matches(/\d/)
        .withMessage('A senha deve conter pelo menos um número'),

    async(req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    const {nome,email,senha} = req.body
    try {
        await usuarioService.addUsuario({nome,email,senha})
    
        res.status(201).send("Usuario adicionado com sucesso")
    } catch (error) {
        res.status(400).send(error.message)
    }
    
})


module.exports = router

