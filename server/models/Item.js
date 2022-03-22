const mongoose  = require('mongoose')
const Schema    = mongoose.Schema;

const itemSchema = new Schema({
    _type: {
        type: String,
        required: true
    },
    img_link: {
        type: String,
        required: true
    },
    prize: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    color: {
        type: Array,
        required: true
    }
});

const Item  = mongoose.model('Item', itemSchema);
module.exports = Item;