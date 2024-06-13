const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { setError } = require("../../utils/error.util");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const register = async (req, res, next) => {
  try {
    const user = new User(req.body);

    //console.log(user);

    const userExist = await User.findOne({ email: user.email });
    if (userExist) {
      return next(setError("404", "This email has already been used."));
    }

    const userDB = await user.save();
    
    return res.status(201).json({
      status: 201,
      message: `User ${userDB.email} created`,
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    return next(setError(error.statusCode || 500, "User Not Created"));
  }
};

const login = async (req, res, next) => {
  try {
   /*  console.log(req.body); */
    const userInfo = await User.findOne({ email:req.body.email });
    /* console.log(req.body, userInfo) */
    //(bcrypt.compareSync(req.body.password, userInfo.password));
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
  
      userInfo.password = "*************"; // ocultamos el dato password en la respuesta por seguridad
      const token = jwt.sign(
        {
          id: userInfo._id,
          email: userInfo.email,
          name: userInfo.name,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.status(200).json({
        data: { massage: HTTPSTATUSCODE[200], user: userInfo, token: token },
      });
    } else {
      return res.json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: null,
      });
    }
  } catch (error) {
    return next("error",error);
  }
};

const logout = (req, res, next) => {
  try {
    const token = null;
    return res.status(200).json({
      status: 200,
      message: "Logout successful",
    });
  } catch (error) {
    return next(setError(error.statusCode, "Logout Error"));
  }
};

const checksession = (req, res) =>{
  try {
    console.log("Token Session",req);
    return res.status(200).json(req.user)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const getUserById = async (req, res, next) => {
  
  try {
    const user = await User.findById(req.user._id);
    if (user) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: user,
      });
    } else {
      res.status(404).json({ status: 404, message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { register, login, logout, checksession, getUserById };