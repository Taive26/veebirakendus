const db = require('../db')
const User = require(`../models/users.model`)
const Users = db.Users;

module.exports = async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const user = await Users.findByCredentials(email, password);
      if (!user) {
        return res.status(401).json({ error: "Login failed! Check authentication credentials" });
      }
      const token = await user.generateAuthToken();
      res.status(201).json({ user, token });
    } catch (err) {
      res.status(400).json({ err: err });
    }
  };
