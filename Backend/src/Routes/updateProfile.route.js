import User from "../Database/scheme.database.js";

export const updateProfile = async(req, res) => {
    try {
        const fullname = req.body.fullname;
        const userId = req.user._id; //This can be done due to protect.middleware

        if(!fullname){
            return res.status(400).json({
                message : "Name is required"
            });
        }
        const updateUser = await User.findByIdAndUpdate(userId, {fullname : fullname}, {new:true});

        res.status(200).json(updateUser);

    } catch (error) {
        console.log("Error in name update : ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};