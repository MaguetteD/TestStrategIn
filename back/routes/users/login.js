import jwt from 'jsonwebtoken';
import modeleUser from '../../baseDeDonnee/dbschema.js';
import {EmailDoesntExist,EmailOuMotDePassNonValide} from '../../outils/error.js';
import validator from "validator";
import bcrypt from 'bcrypt';
const postLogin= async(requete,resp,next)=>{
    const email=requete.body.email;
    const mdp=requete.body.mdp;
    const emailInexistant=new EmailDoesntExist();
    const nonvalidemdp=new EmailOuMotDePassNonValide();
    try{
        if (!validator.isEmail(email) || validator.isEmpty(mdp)|| mdp=== ' ' ){
            return resp.json(nonvalidemdp.message);
        }
        else {
            const result= await modeleUser.findOne({email:email})
            if(!result){
               return  resp.json(emailInexistant.message);
            }

            if (!(await bcrypt.compare(mdp, result.mdp))){
                //return resp.formatter.created('Erreur problem de login');
              }
              jwt.sign({
                data: result
                }, 'secret', { expiresIn: '1h' }, (err, token)=>{
                  if (err) return resp.json('création non effectué')
                  else {
                   return resp.json(token);
                }
              })
        }
    }
    catch(e){
        return next(e);
    }

}
export default postLogin;