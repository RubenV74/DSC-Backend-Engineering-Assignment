const {Router}= require("express");
const messagesController = require('../Controllers/messages.controller');

const messagesRouter = new Router();

messagesRouter.get("/", messagesController.getAllFamilies);
messagesRouter.get("/id/:id", messagesController.getFamilyById);

messagesRouter.post("/", familyController.createFamily);
messagesRouter.put("/", familyController.editFamily);
messagesRouter.delete("/", familyController.deleteFamily);


//

module.exports={
    messagesRouter
};