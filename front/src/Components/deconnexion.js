import React from 'react'
import {useEffect } from 'react';
const Axios= require ('axios');

export default function Deconnexion(){
  useEffect(()=>{ 
          Axios.get("/deconnexion")
          .then ((response)=>{
            localStorage.clear();
            window.location = "/connexion";
          })
        
    }, []);

    return (
      
          <div>
          </div> 
    )
  
}

