const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const {
  validationPassword,
  validationEmail,
} = require("../../utils/validator.util");


const urlProfile = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dperson%2Bicon&psig=AOvVaw1VGhjBKxhgRFhGWJEDr6s6&ust=1717525660073000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiw7OmHwIYDFQAAAAAdAAAAABAE"

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
    default: urlProfile,
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
    default:"user",
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  favExercise: [{ type:mongoose.Schema.Types.ObjectId, ref:"Exercise"}],
  favRoutines: [{ type:mongoose.Schema.Types.ObjectId, ref:"Routine"}],
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