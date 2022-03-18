import StudentDATA from "../model/student.js";

export const getd=async (req,res)=>{
        try {        
                const allstudents=await StudentDATA.find();
                await res.status(200).json(allstudents);  
        }
        catch (error) {
                res.status(404).json({message:error.message});
        }
}
export const create=async(req,res)=>{
        const student=req.body;
        const newStudnet=new StudentDATA(student);
        try {
                await newStudnet.save();
                res.status(200).json(newStudnet);
        } catch (error) {
                res.status(404).json({message:error.message});
        }
}

export const del=async (req,res)=>{
        const id=req.params.id;
        try {          
                await StudentDATA.findByIdAndRemove(id).exec();
                res.send("deleted");
        }
        catch (error) {
                res.status(404).json({message:error.message});
        }
}