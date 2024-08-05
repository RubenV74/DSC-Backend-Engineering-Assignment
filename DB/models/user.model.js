const {Schema, model, ObjectId} = require("mongoose");

const userSchema = (collectionUser) => new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {collection: collectionUser} );

const usersModel = model('users', userSchema('users'));

module.exports = {usersModel}