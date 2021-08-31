const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.postUser = (req,res,next) => {
  const { username, password, password2 } = req.body;
  if (!username || !password || !password2) {
    req.flash('info', 'Flash Message Added');

  }
  if (password != password2) {
    req.flash('info', 'Flash Message Added');

  }
  if (password.length < 8 ) {
    req.flash('info', 'Flash Message Added');
  }
  else{
    User.findOne({ username: username }).then((user) => {
      if (user) {
        req.flash('info', "Email already exists");        
      } else {
        const newUser = new User({
          username,
          password
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                console.log("Success");
                req.login(user, function (err) {
                  if (!err) {
                    res.send(user);
                  } else {
                    res.status(500).send("Server has run into issues")
                    console.log(err);
                  }
                });
              })
              .catch((err) => console.log(err));
          });
        });
      }
    })
  }
}
    
