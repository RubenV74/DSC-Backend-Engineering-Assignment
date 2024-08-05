const LocalStrategy = require("passport-local").Strategy;
const {usersStorage} = require('../DB/index.db');

const  passportConfig = (passport)=> {
    passport.use(new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password"
        },
        function (username, password, done) {

            usersStorage.findOne({where: {username: username}})
                .then(theUser => {
                    if (!theUser) {
                        return done(null, false, {message: "User does not exist"});
                    }
                    if (theUser.password !== password) {
                        return done(null, false, {message: "Password is not valid."});
                    }
                    return done(null, true);
                });
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function (user, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
    return passport
}

module.exports = passportConfig;
