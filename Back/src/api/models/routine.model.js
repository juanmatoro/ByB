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
    required: false,
  },
  date: {
    type: String,
    required: false,
    default: newdate,
  },
  comment: {
    type: String,
    required: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // Referencia al modelo User si existe
  },
  exercise: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }],  // Referencia al modelo Exercise
});

const Routine = mongoose.model("Routine", routineSchema);

module.exports = Routine;
