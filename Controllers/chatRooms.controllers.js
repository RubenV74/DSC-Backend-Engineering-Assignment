const {chatRoomsStorage} = require("../DB/index.db");
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

module.exports = {
    getAllRooms,
    getRoomById
}