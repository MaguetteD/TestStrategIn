import { default as mongoose } from "mongoose";
const userSchemas= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    mdp:{
        type:String,
        required:true,
       
    }
})
const modeleUser=mongoose.model("userSchemas",userSchemas);
export default modeleUser;
