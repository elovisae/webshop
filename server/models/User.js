const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: false
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;