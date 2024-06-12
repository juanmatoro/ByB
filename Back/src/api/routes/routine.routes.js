const express = require("express");
const routineRouter = express.Router();
const {
  createRoutine,
  getAllRoutines,
  getRoutineById,
  updateRoutine,
  deleteRoutine,
} = require("../controllers/routine.controller");
const { isAuth } = require("../middlewares/auth.middleware");

// Ruta para crear un nuevo ejercicio
routineRouter.post("/createroutine", [isAuth],createRoutine);
routineRouter.get("/getRoutines", [isAuth],getAllRoutines);
routineRouter.get("/:id", getRoutineById);
routineRouter.put("/:id", updateRoutine);
routineRouter.delete("/:id", deleteRoutine);

module.exports = routineRouter;
