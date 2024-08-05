const {Schema, model, ObjectId} = require("mongoose");

const chatRoomSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const chatRoomsModel = model('chatRooms', chatRoomSchema);

module.exports = {chatRoomsModel}