const LocalStrategy = require("passport-local").Strategy;
const {usersStorage} = require('../DB/index.db');

const  passportConfig = () => new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password"
        },
        function (username, password, done) {
            usersStorage.find( {username: username})
                .then(theUser => {
                    if (!theUser) {
                        return done(null, false, {message: "User does not exist"});
                    }
                    if (theUser.password !== password) {
                        return done(null, false, {message: "Password is not valid."});
                    }
                    return done(null, theUser);
                });
        }
    );



module.exports = passportConfig;
