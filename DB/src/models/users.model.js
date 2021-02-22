const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);

const usersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Please Include your password"],
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//this method will hash the password before saving the user model
usersSchema.pre(`save`, async function(next) {
    const user = this;
    if (user.isModified(`password`)) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
  });

//this method generates an auth token for the user
usersSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email },
    "secret");
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
  };

//this method search for a user by email and password.
usersSchema.statics.findByCredentials = async (email, password) => {
    const user = await Users.findOne({ email });
    if (!user) {
      throw new Error({ error: "Invalid login details" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error({ error: "Invalid login details" });
    }
    return user;
  }; 

usersSchema.set("toJSON", { virtuals: true });
const Users = mongoose.model(`users`, usersSchema);
module.exports = Users;
