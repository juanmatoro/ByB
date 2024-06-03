const mongoose = require("mongoose");

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
  
});

const Routine = mongoose.model("Routine", routineSchema);

module.exports = Routine;
