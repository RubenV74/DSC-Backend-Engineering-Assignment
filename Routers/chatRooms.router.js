const {Router}= require("express");
const chatRoomsController = require('../Controllers/chatRooms.controllers');

const chatRoomsRouter = new Router();

chatRoomsRouter.get("/", chatRoomsController.getAllRooms);
chatRoomsRouter.get("/id/:id", chatRoomsController.getRoomById);
chatRoomsRouter.post("/", chatRoomsController.createChatRoom);


module.exports={
    chatRoomsRouter
};