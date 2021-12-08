const Sequelize = require('sequelize')
const configDB = require("./database")

const sequelize = new Sequelize(configDB)

module.exports = sequelize