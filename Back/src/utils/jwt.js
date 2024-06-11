const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateSign = (id,email) => {
 return jwt.sign({id,email},process.env.JWT_SECRET,{expiresIn:"1h"})
}

const verifySign = (token) => {
 return jwt.verify(token,process.env.JWT_SECRET)
}


module.exports = {generateSign,verifySign};