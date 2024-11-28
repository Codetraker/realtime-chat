import User from "../Database/scheme.database.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../Components/jwtToken.js";


export const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try{
        const existUser = await User.findOne({ email });
        if(!existUser){
            return res.status(400).json({
                message : "Invalid Credential"
            });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({
                message : "Invalid Credential"
            });
        }
        generateToken(existUser._id, res);
        
        res.status(200).json({
            _id : existUser._id,
            fullname : existUser.fullname,
            email : existUser.email,
            profilePic : existUser.profilePic
        });

    }catch(error){
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
    
};