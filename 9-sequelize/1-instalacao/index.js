const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

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


app.listen(3000)

