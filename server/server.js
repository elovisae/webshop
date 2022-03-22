//Imports
const express       = require('express')  //node.js framework
const mongoose      = require('mongoose') // Used for handling DB and giving noSQL such as mongoDB the abilities of a relational sql like mySQL
const cors          = require('cors')       //Handling cross origin requests 
const bodyParser    = require('body-parser')
const Item          = require('./models/Item')
const { dressPattern } = require('../src/img/clothing/clothing')


//Create an express app (init express and save it to app variable)
const app   = express()
app.use(cors());
app.use(bodyParser.json())



mongoose.connect(
    'mongodb+srv://user:12345@cluster0.i297s.mongodb.net/amanda?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
)

app.listen(3001, () => {
    console.log('Listening to port 3001')
})  //The port to listen to
 