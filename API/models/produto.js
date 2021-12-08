const { sequelize } = require("../config/sequilize");

const produto = (sequelize, DataTypes) => {
    const Produto = sequelize.define("produto", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          nome:{
            type: DataTypes.STRING,
            allowNull: false
          },
          descricao:{
            type: DataTypes.TEXT('medium'),
          },
          marca:{
            type: DataTypes.STRING,
            allowNull: false
          },
          preco:{
            type: DataTypes.DOUBLE,
            allowNull: false
          },
          quantidade:{
            type: DataTypes.INTEGER,
            allowNull: false
          },
          categoria:{
            type: DataTypes.STRING,  
          },
          imagem:{
            type: DataTypes.STRING,
            allowNull: false
          }
    })
    return Produto;
}

module.exports = produto;
