const User = require("../models/user");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const { firstName, lastName, email, password } = req.body;

    const _user = new User({
      firstName,
      lastName,
      userName: Math.random().toString(),
      email,
      password,
    });

    _user.save((error, user) => {
      if (error) {
        return res.status(400).json({
          message: "Something Went Wrong",
        });
      }
      if (user)
        return res.status(201).json({
          message: "User Successfully Created",
        });
    });
  });
};
