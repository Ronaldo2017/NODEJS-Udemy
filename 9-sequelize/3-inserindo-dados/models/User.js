//importar dataTypes
//traz todos os tipos de dados do bd
//faz com que o sequelize identifique, inteiros, string etc.

const {DataTypes} = require('sequelize')

//traz a conexão com o bd
const db = require('../db/conn')


//classe user
//não precisa inserir o ID, pois ele já traz automaticamente
const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false, //deixa o campo como not null
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }
})

//exportando o User
module.exports = User