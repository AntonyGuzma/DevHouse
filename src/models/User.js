const {Schema, model} = require('mongoose')

//tabela de user
const UserSchema = new Schema({
    email: String
})

module.exports = model('User', UserSchema);