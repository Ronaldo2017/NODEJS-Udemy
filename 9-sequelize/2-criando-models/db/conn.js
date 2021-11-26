//conectando sequelize
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
})

// try{
//     sequelize.authenticate()
//     console.log('Conexão bem sucedida!')
// }catch(err){
//     console.log('Não foi possível conectar: ', err)
// }

module.exports = sequelize