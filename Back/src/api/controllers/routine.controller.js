const Routine = require("../models/routine.model");
const User = require("../models/user.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createRoutine = async (req, res, next) => {
  try {
    const userId = req.user._id;
    // Crear la rutina

    const routine = await Routine.create(req.body);
    console.log(routine);
    // Actualizar el usuario con la nueva rutina
    const updateUser = await User.findByIdAndUpdate(
      userId,
      { $push: { favRoutines: routine._id } },
      { new: true }
    );
    // Enviar respuesta al cliente
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: routine,
    });
  } catch (error) {
    // Manejar errores específicos
    next(error);
  }
};

const getAllRoutines = async (req, res, next) => {
  const idUsuario = req.user._id;
  try {
    const routines = await Routine.find({ owner: idUsuario }).populate(
      "exercise"
    );

    res.status(200).json({
      status: 200,
      message: "Routines found",
      data: routines,
    });
  } catch (error) {
    next(error);
  }
};

const getRoutineById = async (req, res, next) => {
  console.log(req);
  try {
    const routine = await Routine.findById(req.params.id);
    if (routine) {
      console.log(routine);
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
