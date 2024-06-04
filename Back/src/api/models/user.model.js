const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const {
  validationPassword,
  validationEmail,
} = require("../../utils/validator.util");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: false,
    required: true,
  },
  url: {
    type: String,
    trim: true,
    required: false,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  rol: {
    type: String,
    trim: true,
    required: false,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  
});

userSchema.pre("save", function (next) {
  if (!validationPassword(this.password)) {
    return next(setError("404", "The password does not meet the requirements"));
  }
  if (!validationEmail(this.email)) {
    return next(setError("404", "The email is not correct"));
  }

  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
