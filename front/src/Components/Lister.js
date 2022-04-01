import React from 'react'
import { useState, useEffect } from 'react';
import jwt from "jwt-decode";
const Axios= require ('axios');

export default function Lister(){
  
  const [decode, affiche] = useState("");

  useEffect(()=>{ 
          Axios.get("/Lister",  {headers :{'x-access-token': localStorage.getItem('token')}})
        .then ((response)=>{ 
          affiche(response.data);
        })
        .catch((error)=>{
          console.log(error);
        });
        //recuperation du token retourné par le serveur
        const token = localStorage.getItem('token');
        if (!token){
          alert("Pas de token trouvée") 
          localStorage.removeItem('token');
          window.location = "/connexion";
        } 
          else {
            const decode = jwt(token)
            //si pas de token decodé on retourne a l'
            if (!decode){
              localStorage.removeItem('token');
               window.location = "/connexion";
            }
            
          }

        
    }, []);
  
    return (
      Array.from(decode).map((user, k)=>{
        return ( 
          <div>
              <ul key={user.k}>
                { user.email}
              </ul>
          </div>
                )
      })
    
        
    )
 
  
}

