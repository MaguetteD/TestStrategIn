import jwt from 'jsonwebtoken';
import { PasDeToken,PasdUtilisteur,ConnectRequire } from '../../outils/error.js';
import modeleUser from '../../baseDeDonnee/dbschema.js';
const getListe=async(requete,resp,next)=>{
    const token = requete.headers['x-access-token']
    const notoken=new PasDeToken();
    const nouser=new PasdUtilisteur();
    const requireConne=new ConnectRequire();
        try{
            if (!token) return resp(notoken.message);
            jwt.verify(token, 'secret', async (err, decodedToken)=>{
                if (!err){
                    const result=  await  modeleUser.find();
                    if (result){
                        return  resp.json(result)
                    }
                    else {
                        return  resp.json(nouser.message);
                    }
                }
                else {
                    return  resp.json(requireConne.message);
                }
            
            });
        }
        catch(e){
            return next(e);
        }
    }

export default getListe;
