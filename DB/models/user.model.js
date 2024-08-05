const {Schema, model, ObjectId} = require("mongoose");

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true
    }
});

const usersModel = model('users', userSchema);

module.exports = {usersModel}