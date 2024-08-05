const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const session = require("express-session");
const passport = require('./Auth/passportAuth')(require("passport"));
const {usersRouter} = require('./Routers/users.router');
const {chatRoomsRouter} = require('./Routers/chatRooms.router');
const {messagesRouter} = require('./Routers/messages.router');

require("dotenv").config();
app = express()

const PORT = process.env.PORT ||3001;

app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET
}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', usersRouter);
app.use('/chatRoom', chatRoomsRouter);
app.use('/message', messagesRouter);

app.use((req,res)=>{res.status(400).send('<h1>404</h1><span>Page Not Found!</span>')});
app.listen(PORT, ()=> console.log(`express is running on port ${PORT}`));