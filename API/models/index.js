const sequelize = require("../config/sequilize")
const Sequelize = require("sequelize")
const Usuario = require("./usuario")
const Produto = require("./produto")

const usuario = Usuario(sequelize, Sequelize.DataTypes)
const produto = Produto(sequelize, Sequelize.DataTypes)

const db = {
    usuario,
    produto,
    sequelize

}


module.exports = db