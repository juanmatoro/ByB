const mongoose = require("mongoose");
const User = require("./user.model");

const exerciseSchema = {
  muscle: { type: String, required: true },
  exerciseName: { type: String, required: true },
  execution: { type: String, required: true },
  reps: { type: String, required: true },
  url: { type: String, required: true },
};


// Definición del esquema del álbum
const routineSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  owner: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
  exercises: [{ type: exerciseSchema }],
});

const Routine = mongoose.model("Routine", routineSchema);

module.exports = Routine;
