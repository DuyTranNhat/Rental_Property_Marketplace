import mongoose from "mongoose";

export const connectDB = async () => {
    await  mongoose.connect("mongodb+srv://duytn1053_db_user:duy123@estate.b5zo6bs.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Connected to MongoDB"));
}