const {Router}= require("express");
const usersController = require('../Controllers/users.controller');
const passport = require('passport')
const usersRouter = new Router();

usersRouter.get("/", usersController.getAllUsers);
usersRouter.get("/id/:id", usersController.getUserById);
usersRouter.post("/", usersController.createUser);
usersRouter.put("/", usersController.editUser);
usersRouter.delete("/", usersController.deleteUser)
usersRouter.post("/login",  passport.authenticate("local"),
    (req, res) =>{
        res.json(req.user);
    } )
usersRouter.post("/logout",
    (req, res)=> {
       req.logout((err)=>{
       if(err) console.log(err)});
    } )


module.exports={
    usersRouter
};

