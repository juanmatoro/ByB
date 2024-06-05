const express = require("express");
const exerciseRouter = express.Router();
const {
  createExercise,
  getAllExercises,
  getExerciseById,
  updateExercise,
  deleteExercise,
} = require("../controllers/exercise.controller");
const { isAuth } = require("../middlewares/auth.middleware");

exerciseRouter.post("/createExercise", createExercise);
exerciseRouter.get("/getExercise", getAllExercises);
exerciseRouter.get("/:id", getExerciseById);
exerciseRouter.patch("/:id", updateExercise);
exerciseRouter.delete("/:id", deleteExercise);

module.exports = exerciseRouter;
