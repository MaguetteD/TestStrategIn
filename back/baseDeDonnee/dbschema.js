const { default: mongoose } = require("mongoose")
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
module.exports=userSchemas;
module.exports=modeleUser;
