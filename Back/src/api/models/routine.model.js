const mongoose = require("mongoose");
const date = new Date();
// console.log(date);

const newdate = `${date.getDate()}/${
  date.getMonth() + 1
}/${date.getFullYear()}`;
// Definición del esquema del álbum
const routineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
    default: newdate,
  },
  comment: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  exercise: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }],
});

const Routine = mongoose.model("Routine", routineSchema);

module.exports = Routine;
