import { default as mongoose } from 'mongoose';
const url ='mongodb+srv://dataBaseUsr:dbUser@cluster0.wqkqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const db=mongoose.connect(url,(err,res)=>{
    if(err){
        console.log("connexion non reussie");
        res.json({message: " Connexion echouée"});
    }
    console.log("connexion réussi");
});
export default db;
