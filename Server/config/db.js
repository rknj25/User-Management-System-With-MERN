import mongoose from "mongoose";

const dbconnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected");
        
    }
    catch{
        console.log("database not connected..");
        
    }
}

export default dbconnect;