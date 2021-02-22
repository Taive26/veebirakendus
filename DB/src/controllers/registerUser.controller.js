const db = require('../db')
const User = require(`../models/users.model`)

module.exports = async (req, res) => {
  try {
    let user = await User.find({ email: req.body.email })
    if (user.length >= 1) {
    return res.status(409).json({
    message: "email already in use"
    });
     }
     user = new User({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password
     });
     let data = await user.save();
     const token = await user.generateAuthToken(); // here it is calling the method that we created in the model
     res.status(201).json({ data, token });
   } catch (err) {
     res.status(400).json({ err: err });
   }
};

