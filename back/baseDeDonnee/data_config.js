const { default: mongoose } = require('mongoose');

const url ='mongodb+srv://dataBaseUsr:dbUser@cluster0.wqkqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
 mongoose.connect(url,(err,res)=>{
    if(err){
        console.log("connexion non reussie");
        res.send({message: " Connexion echouée"});
    }
    console.log("connexion réussi");
});

