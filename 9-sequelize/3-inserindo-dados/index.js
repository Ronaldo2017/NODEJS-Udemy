const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')

const User = require('./models/User')



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

//inserindo usuario
app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    }else{
        newsletter = false
    }

    //garante a criação do usuario
    //insere os campos na tabela
    await User.create({name, occupation, newsletter})

    res.redirect('/')
    
})

//primeira rota
app.get('/', (req, res) => {
    res.render('home')
})



//persistir a conexão com o bd e cria a tabela

conn.sync().then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))

