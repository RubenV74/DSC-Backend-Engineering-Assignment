const {Router}= require("express");
const usersController = require('../Controllers/users.controller');

const usersRouter = new Router();

usersRouter.get("/", usersController.getAllUsers);
usersRouter.get("/id/:id", usersController.getUserById);
usersRouter.post("/", usersController.createUser);
usersRouter.put("/", usersController.editUser);
usersRouter.delete("/", usersController.deleteUser)


module.exports={
    usersRouter
};

