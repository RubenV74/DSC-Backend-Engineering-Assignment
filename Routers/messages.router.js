const {Router}= require("express");
const messagesController = require('../Controllers/messages.controller');

const messagesRouter = new Router();

messagesRouter.get("/", messagesController.getAllMessages);
messagesRouter.get("/id/:id", messagesController.getMessageById);
messagesRouter.post("/", messagesController.createMessage);
messagesRouter.put("/", messagesController.editMessage);
messagesRouter.delete("/", messagesController.deleteMessage);



module.exports={
    messagesRouter
};