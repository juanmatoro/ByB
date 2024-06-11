const User = require("../models/user.model");
const {verifySign} = require('../../utils/jwt')

const isAuth = async(req,res,next) => {
    try {
        const authorization = req.headers.authorization;
        console.log(req.headers.authorization);
        if (!authorization) {
            return res.status(401).json({message:"no estas autorizado campeon"})
        }

        // console.log(req.headers.authorization);
        // mi autorization es Bearer xxxxx -> hago un split para qeudarme con el xxxx
        const token = authorization.split(" ")[1];

        if (!token) {
            return res.status(401).json({message:"token invalido"})
        }
        const tokenVerified = verifySign(token);
         console.log(tokenVerified);
        if (!tokenVerified.id) {
            return res.status(401).json(tokenVerified);
        }
        const userLogged = await User.findById(tokenVerified.id)
        req.user = userLogged;
        next()
    } catch (error) {
        return res.status(500).json(error);
    }
}
module.exports ={isAuth}