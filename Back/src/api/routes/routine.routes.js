const express = require("express");
const routineRouter = express.Router();
const {
  createRoutine,
  getAllRoutines,
  getRoutineById,
  updateRoutine,
  deleteRoutine,
} = require("../controllers/routine.controller");

// Ruta para crear un nuevo ejercicio
routineRouter.post("/", createRoutine);
routineRouter.get("/", getAllRoutines);
routineRouter.get("/:id", getRoutineById);
routineRouter.put("/:id", updateRoutine);
routineRouter.delete("/:id", deleteRoutine);

module.exports = routineRouter;
