import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aadityasingh1617:resumebuilder1617@cluster0.jxytyht.mongodb.net/TaskManager')
        .then(() => console.log("DB CONNECTED"));
}

