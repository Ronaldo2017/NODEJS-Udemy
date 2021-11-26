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
app.get('/home', (req, res) => {
    res.render('home')
})

app.post('/users/create', function (req, res) {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter
  
    if (newsletter === 'on') {
      newsletter = true
    }
  
    User.create({ name, occupation, newsletter })
  
    res.redirect('/')
  })

//persistir a conexão com o bd e cria a tabela

conn.sync().then(() => {
    app.listen(8080)
})
.catch((err) => console.log(err))

