const express = require('express')
const userRouter = express.Router();
const { register, login, logout, checksession, getUserById } = require("../controllers/user.controller");
const { isAuth } = require("../middlewares/auth.middleware");

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", [isAuth], logout);
userRouter.get("/checksession", [isAuth], checksession);
userRouter.get("/user", [isAuth], getUserById);
module.exports = userRouter;
