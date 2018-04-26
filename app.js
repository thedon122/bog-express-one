require('dotenv').config()
const express = require ('express')
const mongoose = require ('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const router = require('routes/creatures')

mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection
db.on('error', err => {
    console.log(err)
})

db.on('open', () => {
    console.log('Connected to MongoDB')
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send("Hello World")
})

const PORT = process.env.PORT || 3001 
app.listen(PORT, () => {
    console.log('App is up and running on port' + PORT)
})