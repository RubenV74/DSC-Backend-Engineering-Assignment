const {Schema, model, ObjectId} = require("mongoose");

const chatRoomSchema = (collectionChatRoom) => new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {collection: collectionChatRoom});

const chatRoomsModel = model('chatRooms', chatRoomSchema('chatRooms'));

module.exports = {chatRoomsModel}