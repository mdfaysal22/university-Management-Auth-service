import mongoose from "mongoose";
import app from "./app";
import database from "./DB/database";
import config from "./config ";



const run = async() => {
    try {
        await database()
        app.listen(config.port, () => {
            console.log(`Server is Running by ${config.port}`);
        })
    } catch (error) {
        console.log("Failed to connect", error);
    }
}   

run();





