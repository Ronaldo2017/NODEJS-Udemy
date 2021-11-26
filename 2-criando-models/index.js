const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')

const app = express()

//template engine
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')


//midlleware
//configurar o express para pegar o body
app.use(
    express.urlencoded({
        extended: true
    })
)

//pegar o body em json
app.use(express.json)


//arquivo estaticos
app.use(express.static('public'))

//primeira rota
app.get('/', (req, res) => {
    res.render('home')
})

//persistir a conexão com o bd e cria a tabela

conn.sync().then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))

