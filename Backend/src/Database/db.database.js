import mongoose from 'mongoose';

export const connectionDB = async() =>{
    try{   
        const res = await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected");
        // console.log("Details of connection : ", res);
    }catch(error){
        console.log("MongoDB connection error : ", error);
    }
}