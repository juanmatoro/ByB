const Routine = require("../models/routine.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createRoutine = async (req, res, next) => {
  try {
    const routine = await Routine.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: routine,
    });
  } catch (error) {
    next(error);
  }
};

const getAllRoutines = async (req, res, next) => {
  try {
    const routines = await Routine.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: routines,
    });
  } catch (error) {
    next(error);
  }
};

const getRoutineById = async (req, res, next) => {
  try {
    const routine = await Routine.findById(req.params.id);
    if (routine) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: routine,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateRoutine = async (req, res, next) => {
  try {
    const routine = await Routine.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (routine) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: routine,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteRoutine = async (req, res, next) => {
  try {
    const routine = await Routine.findByIdAndDelete(req.params.id);
    if (routine) {
      res.status(204).json({
        status: 204,
        message: HTTPSTATUSCODE[204],
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRoutine,
  getAllRoutines,
  getRoutineById,
  updateRoutine,
  deleteRoutine,
};