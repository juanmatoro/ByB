const express = require("express");
const userRouter = express.Router();
const {
  register,
  login,
  logout,
  checksession,
  getUserById,
} = require("../controllers/user.controller");
const { isAuth } = require("../middlewares/auth.middleware");

userRouter.post("/login", login);
userRouter.post("/logout", isAuth, logout);
userRouter.get("/checksession", isAuth, checksession);
userRouter.post("/register", register);
userRouter.get("/me", isAuth, getUserById);

module.exports = userRouter;
