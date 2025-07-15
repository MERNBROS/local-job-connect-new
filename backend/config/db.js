import mongoose from "mongoose";

// function to connect to the mongodb database

const connectDB = async () =>{
    mongoose.connection.on('connected',()=> console.log("DATABASE CONNECTED SUCCESSFULLY!"))

    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
}

export default connectDB