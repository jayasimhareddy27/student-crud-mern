import mongoose from "mongoose";

const StudentSchema=mongoose.Schema({
    RollNumber:String,
    Name:String,
    Grade:String,
})
const student=mongoose.model("students",StudentSchema);

export default student;