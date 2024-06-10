const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  muscle: {
    type: String,
    required: true,
  },
  exerciseName: {
    type: String,
    required: true,
  },
  execution: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
