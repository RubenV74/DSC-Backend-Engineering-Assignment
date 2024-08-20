const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const session = require("express-session");
const passport = require("passport");
const {usersRouter} = require('./Routers/users.router');
const {chatRoomsRouter} = require('./Routers/chatRooms.router');
const {messagesRouter} = require('./Routers/messages.router');
const User = require('./DB/models/user.model')
const {messagesStorage} = require("./DB/index.db");
require("dotenv").config();
app = express()
const  http = require('http').createServer(app);
const PORT = process.env.PORT || 3001;
const io = require('socket.io')(http, {cors: {
        origin: "*"
    }})

app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/user', usersRouter);
app.use('/chatRoom', chatRoomsRouter);
app.use('/message', messagesRouter);

app.use((req,res)=>{res.status(400).send('<h1>404</h1><span>Page Not Found!</span>')});
app.listen(PORT, ()=> console.log(`express is running on port ${PORT}`));

http.listen(3003, () => {
    console.log(`listening on *:${3003}`);
});
io.on('connection', (socket) => { // socket object may be used to send specific messages to the new connected client
    console.log('new client connected');
    socket.emit('connection', null);
    socket.on('send-message', message => {
        messagesStorage.insert(message).then(r=>{
            io.emit('message', message);
        })

    });
    socket.on('disconnect', () => {
    });

});