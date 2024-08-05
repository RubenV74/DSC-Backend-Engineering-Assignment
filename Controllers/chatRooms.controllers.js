const {chatRoomsStorage, messagesStorage} = require("../DB/index.db");
const {Types} = require('mongoose');


// get all rooms
const getAllRooms= async (req, res) => {
    const rooms = await chatRoomsStorage.find({});
    res.status(200).json(rooms);
}

// get room by id
const getRoomById = async (req, res, next) => {
            const id = req.params.id;
            if (!id) throw new Error("ID is NOT valid!");
            const room = await chatRoomsStorage.find({_id : new Types.ObjectId(id)});
            res.status(200).json(room);
}

// creat chatRoom
const createChatRoom = async (req, res) => {
    const {body} = req;
    await messagesStorage.insert(body);
    res.status(200).send('Chat Room saved successfully');
}

module.exports = {
    getAllRooms,
    getRoomById,
    createChatRoom
}