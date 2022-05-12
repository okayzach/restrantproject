//DEPENDENCIES
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

//MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use('/places', require('./controllers/places'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
  })
  
//PORT
app.listen(process.env.PORT)

