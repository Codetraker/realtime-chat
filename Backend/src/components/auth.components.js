import User from "../Database/scheme.database.js";
import bcrypt from "bcryptjs"
import { generateToken } from "./jwtToken.js";

export const signup = async(req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    //const { fullname, email, password } = req.body; Also we can write
    try{
        if(!fullname || !email || !password){
            return res.status(400).json({
                message : "All fields are Required!"
            });
        }
        if(password.length < 6){
            return res.status(400).json({
                message : "Password must be atleast 6 characters."
            });
        }
        const existUser = await User.findOne({ email });
        if(existUser){
        return res.status(400).json({
            message : "Email already exists."
        });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullname,
            email,
            password : hashPassword
        });

        if(newUser){
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id : newUser._id,
                fullname : newUser.fullname,
                email : newUser.email,
                profilePic : newUser.profilePic
            });

        }else{
            res.status(400).json({
                message : "Invalid User data."
            });
        }
    }catch(error){
        console.log("Error while Signup : " , error)
        res.status(400).json({
            message : "Internal Server Error."
        });
    }

};