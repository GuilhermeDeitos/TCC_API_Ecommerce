const { sequelize } = require("../config/sequilize");

const usuario = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("users", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome:{
          type: DataTypes.STRING,
          allowNull: false
        },
        email:{
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
        senha:{
          type: DataTypes.STRING,
          allowNull: false
        }
    
      })
      return Usuario
}

module.exports = usuario

