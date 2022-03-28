//Imports
const express       = require('express')  //node.js framework
const mongoose      = require('mongoose') // Used for handling DB and giving noSQL such as mongoDB the abilities of a relational sql like mySQL
const cors          = require('cors')       //Handling cross origin requests 
const bodyParser    = require('body-parser')
const Item          = require('./models/Item')
const User          = require('./models/User')


//Create an express app (init express and save it to app variable)
const app   = express()
app.use(cors());
app.use(bodyParser.json())

// ***************** ITEMS ***************
// Add item
app.post('/items', async (req, res) => {
    const item = new Item(req.body)
    
    item.save()
        .then(result => {
            console.log('item added', item)
            res.send('Item added')
        })
        .catch(error => console.log(error))
})

// Get all items
app.get('/items', async (req, res) => {
    Item.find()
        .then(data => {
            res.json(data)
            
        })
        .catch(error => console.log(error))
})

app.get('/', (req, res) => {
    res.redirect('/items')
}) 

//Get specific item
app.get('/items/:itemId', async (req, res) => {
    // console.log(req.params.itemId)
    Item.findById(req.params.itemId)
        .then(data => res.json(data))
        .catch(error => console.log(error))
})

// Delete specific item
app.delete('/items/:itemId', async (req, res) => {
    Item.deleteOne({_id: req.params.itemId})
        .then(data => {
            console.log('Item deleted')
            res.json(data)
        })
        .catch(error => console.log(data))
})

// Update specific item
app.patch('/items/:itemId', async (req, res) => {
    Item.updateOne({_id : req.params.itemId}, 
        {$set: { 
            img_link: req.body.img_link,
            prize: req.body.prize,
            bio: req.body.bio,
            new: req.body.new,
            bestseller: req.body.bestsellers
        }
        })
        .then(data => {
            console.log('Item patched')
            res.json(data)
        })
        .catch(error => console.log(error))
})

// ***************** USERS ***************
app.get('/users', async (req, res) => {
    User.find()
        .then(data => {
            res.json(data)
        })
})
app.get('/users/:userId', async (req, res) => {
    User.findById(req.params.userId)
        .then(data => res.json(data))
        .catch(error => console.log(error))
})

app.post('/users', async(req, res) => {
    console.log('Post request made')
    const user = new User(req.body);
    console.log(user);
    const isMailAlreadyRegistered = await User.exists({mail: user.mail});

    if (isMailAlreadyRegistered){
        res.send({message: 'This mail is already registered, try logging in'})
    }else{
        user.save()
            .then(data => res.send({message: 'You are now registered! :)'}))
            .catch(error => console.log(error))
    }
})

app.delete('/users/:userId', async(req, res) => {
    User.deleteOne({_id : req.params.userId})
        .then(data => 
            {console.log('User deleted')
            res.json(data)
        })
        .catch(error => console.log(error))
})


mongoose.connect(
    'mongodb+srv://user:12345@cluster0.i297s.mongodb.net/amanda?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
)

app.listen(3001, () => {
    console.log('Listening to port 3001')
})  //The port to listen to
 