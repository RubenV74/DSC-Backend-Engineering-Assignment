const {Router}= require("express");
const usersController = require('../Controllers/users.controller');
const passport = require('passport')
const usersRouter = new Router();
const User = require('../DB/models/user.model')
usersRouter.get("/", usersController.getAllUsers);
usersRouter.get("/id/:id", usersController.getUserById);
usersRouter.post("/", usersController.createUser);
usersRouter.put("/", usersController.editUser);
usersRouter.delete("/", usersController.deleteUser);
usersRouter.post("/register", async (req, res) =>{
    try {
        const user = await User.register(new User({username: req.body.username}), req.body.password);
    req.login(user, (er) => {
                if (er) {
                    res.json({ success: false, message: er });
                }
                else {
                    res.json({ success: true, message: "Your account has been saved" });
                }
            });
            }catch(err){
            res.status(400).send("ERROR: ", err)
    }
});

usersRouter.post("/login", (req, res)=>{
    passport.authenticate("local" , (err, user, info)=> {
        if (err) {
            res.status(401).send({success: false, message: err});
        } else if (!user) {
            res.status(401).send({success: false, message: "username or password incorrect"});
        }else {
            res.status(200).send(user);
        }
})(req, res);
}
);
usersRouter.post("/logout",
    (req, res)=> {
       req.logout((err)=>{
       if(err) console.log(err)});
    } )


module.exports={
    usersRouter
};

