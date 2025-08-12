import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token){
            return res.status(401).json({message: "Unauthorized - No token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded){
            return res.status(401).json({message: "Unauthorized - No token Provided"});
        }

        const user = await User.findById(decode.userId).select("-password");

    } catch (error) {
        
    }
}