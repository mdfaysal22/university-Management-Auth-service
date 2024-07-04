import mongoose from "mongoose";
import config from "../config ";

const database = async() => {
    try{
        await mongoose.connect(config.db as string)
        console.log("Database connected");
    }catch(error){
        console.log("DB Not Connected", error)
    }
};


export default database;