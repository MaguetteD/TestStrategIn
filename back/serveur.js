import express, { json } from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import db from './baseDeDonnee/data_config.js';
import routeInitializer from './routes/routeInitializer.js';
import Lister from './routes/users/Lister.js';
import login from './routes/users/login.js';
import inscription from './routes/users/inscription.js';

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 
app.use(json());
app.use('/login',login);
app.use('/Lister',Lister);
app.use('/inscription',inscription);

app.get('/',(requete,resultat)=>{
    console.log(requete);
    resultat.send('ok');
})

app.get('/deconnexion', (req, response)=>{
    response.json({deconnexion:"vous êtes déconnecté"})
})
app.listen(4000,()=> {
    console.log('connecté');
})
