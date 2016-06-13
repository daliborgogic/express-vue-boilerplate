'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const cors = require('cors')
const pug = require('pug')
const main = require('./routes/main')
const env = app.get('env')

if (env == 'development') {
  app.set('json spaces', 2);
}

//app.options('*', cors())

app.disable('x-powered-by')

app.set('view engine', 'pug')
app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use('/', main)

app.listen(3000, () => console.log(`CORS enabled\nPort 3000\nEnvironment is ${env}`))
