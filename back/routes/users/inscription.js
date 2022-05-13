import modeleUser from '../../baseDeDonnee/dbschema.js';
import {UtilisteurExistDeja,EmailOuMotDePassNonValide } from '../../outils/error.js';
import validator from "validator";
import bcrypt from "bcrypt";
const  saltRounds  =  10 ; 
const postInscription=async(requete,res,next)=>{
    try{
        const userexist=new UtilisteurExistDeja();
        const nonvalidemdp=new EmailOuMotDePassNonValide();
        const email=requete.body.email;
        const mdp=requete.body.mdp;
        if (!validator.isEmail(email) || validator.isEmpty(mdp)|| mdp=== ' ' ){
            return next(nonvalidemdp);
        }
        else {
           const result=await modeleUser.findOne({email:email});
            if(result){
                return res.json(userexist.message);
            }
            const data = await new modeleUser ({
                email : email,
                mdp : mdp
            })
            bcrypt.hash ( mdp ,  saltRounds ,  function (err, hash )  { 
                data.mdp = hash
                data.save((err,resp)=> {
                    if (err) {
                        return res.json('non ajouté');
                    }
                    else {
                        return res.json('sucess');
                    }
                })
            })
        }
    }
    catch (e){
        return next(e);
    }
}
    
export default postInscription;