const {Schema, model, ObjectId} = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = (collectionUser) => new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
}, {collection: collectionUser} );

const User = userSchema('users').plugin(passportLocalMongoose)
const usersModel = model('User', User);

module.exports = usersModel;