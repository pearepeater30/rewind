const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs")
const User = require("../models/User")

module.exports = async function (passport) {
  passport.use(
    new LocalStrategy( {username: "username"}, function (err, user) {
      User.findOne({ username: username}).then((user) => {
        if(!user) {
          return done(null, false, {
            message: "That username is not registered",
          })
        }
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;

          if (isMatch) {
            return done(null, user);
          }
          else {
            return done(null, false, {
              message: "The Password does not match",
            });
          }
        })
      })
      .catch((err) => {
        console.log(err);
      })
    })
  )

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}