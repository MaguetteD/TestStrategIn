
const express =require('express');
const app=express();
const bcrypt = require("bcrypt");
const  jwt  = require ('jsonwebtoken') ;
const bodyParser = require("body-parser");
var cors = require('cors')
const Validator = require("validator");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 
app.use(express.json());
const db=require('./baseDeDonnee/data_config');
const dbschema=require('./baseDeDonnee/dbschema');
const  saltRounds  =  10 ; 
app.get('/',(requete,resultat)=>{
    console.log(requete);
    resultat.send('ok');
    

})
app.post('/inscription',(requete,resultat)=>{
    
    const email=requete.body.email;

    const mdp=requete.body.mdp;
    //verification de la validite des champs saisis
    if (!Validator.isEmail(email) ){
        console.log("pas valide");
        resultat.json({erreur:"champ non valide"
        })
    }
    else if (Validator.isEmpty(mdp)|| mdp=== ' '){
        console.log("pas valide");
        resultat.json({erreur:"champ non valide"
            })
      }
    else {


    dbschema.findOne({email:email}).then((res)=>{
        if(res){
            console.log("exist");
            resultat.json({erreur:"utilisateur existant"
            })        
        }
        else {
            //creation de l'utilisateur
            const data = new dbschema ({
                email : email,
                mdp : mdp
            })
            // on hash le mdp
            bcrypt . hash ( data.mdp ,  saltRounds ,  function ( err ,  hash )  { 
                //chamgement du mdp de l'utilisateur
                data.mdp = hash
                console.log(data.mdp)
                //sauvegarde
                data.save((err, res)=> {
            if (err) {
                console.log(err)
                resultat.json( {ajout: "utilisateur non ajoute"})
            }

            else {
            console.log("utilisateur ajoute")
            resultat.json( {ajout: "utilisateur ajoute"})
            }
        })

           
        } ) ;
            

        }
        
        
        

    })
}
})

app.post('/login', (requete, response)=>{
    const email=requete.body.email;
    const mdp=requete.body.mdp;
    console.log(email)

    if (!Validator.isEmail(email) ){
        console.log("pas valide");
        response.json({erreur:"champ non valide"
        })
    }
    else if (Validator.isEmpty(mdp)|| mdp=== ' '){
        console.log("pas valide");
        response.json({erreur:"champ non valide"
            })
      }
    else {
    dbschema.findOne({email:email}).then((res)=>{
        if(!res){
            console.log("email non trouve");
            response.json({erreur:"email inexistant"
            })
        }
        else {
            bcrypt.compare (mdp, res.mdp, (err, result)=>{
                if (err) throw err;
                else {
                    if (result){
                        console.log(result)
                        jwt.sign({
                        data: res
                        }, 'secret', { expiresIn: '1h' }, (err, token)=>{
                            if (err) throw err
                            else {
                        response.json({message:"connexion effectue"
                        ,token : token})
                            }
                        })

                        

                    }

                }
            })

        }

})
}
})

app.get('/Lister', (requete, response)=>{
const token = requete.headers['x-access-token']
if (!token) response.json({notoken: "Pas de token trouve"})

jwt.verify(token, 'secret', (err, decodedToken)=>{
    console.log(decodedToken)
    if (!err){
        dbschema.find().then((res)=>{
            if (res){
                response.send(res)
            }
            else {
                 response.json({nouser: "Pas d'utilisateur"})
            }
        })
    }
    else {
         response.json({notoken: "pas de token trouver"})
    }
})



})

app.get('/deconnexion', (req, response)=>{
    response.json({deconnexion:"vous êtes déconnecté"})
})
app.listen(4000,()=> {
    console.log('connecté');
})
//const route=require('./route/route');
//app.use("/route",route);
