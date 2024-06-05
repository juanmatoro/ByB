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
routineRouter.post("/createRoutine", createRoutine);
routineRouter.get("/getRoutines", getAllRoutines);
routineRouter.get("/:id", getRoutineById);
routineRouter.put("/:id", updateRoutine);
routineRouter.delete("/:id", deleteRoutine);

module.exports = routineRouter;
