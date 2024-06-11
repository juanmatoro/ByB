const Exercise = require("../models/exercise.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createExercise = async (req, res, next) => {
  //console.log(req);
  try {
    const exercise = await Exercise.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: exercise,
    });
  } catch (error) {
    next(error);
  }
};

const getAllExercises = async (req, res, next) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: exercises,
    });
  } catch (error) {
    res.status(500).json(error);
    next(error);
  }
};

const getExerciseById = async (req, res, next) => {

  try {
    const exercise = await Exercise.findById(req.params.id);
    if (exercise) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: exercise,
      });
    } else {
      res.status(404).json({ status: 404, message: "Exercise not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateExercise = async (req, res, next) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (exercise) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: exercise,
      });
    } else {
      res.status(404).json({ status: 404, message: "Exercise not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteExercise = async (req, res, next) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    if (exercise) {
      res.status(204).json({ status: 204, message: "Exercise deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Exercise not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createExercise,
  getAllExercises,
  getExerciseById,
  updateExercise,
  deleteExercise,
};
