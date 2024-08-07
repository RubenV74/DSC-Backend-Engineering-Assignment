const {StorageConnection} = require("./MongoStorage");
const {messagesModel} = require("./models/message.model");
const {chatRoomsModel} = require("./models/chatRoom.model");
const User = require("./models/user.model");

module.exports ={
    messagesStorage : new StorageConnection(messagesModel),
    chatRoomsStorage: new StorageConnection(chatRoomsModel),
    usersStorage: new StorageConnection(User)
}