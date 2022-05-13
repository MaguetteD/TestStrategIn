/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import useAuthContext from "../contex/AuthContex";

const Connexion =()=>{
  const {dispatchAPI}= useAuthContext();
  const [email,setEmail]= useState("");
  const [mdp, setMdp]= useState("");
  const onSubmit=async (e)=>{
    e.preventDefault();
    const data= {
      email,
      mdp
    };
    await dispatchAPI('login',data);
        
  }
    
       
    
  return (
       
    <div>
      <h1>connexion </h1>
    
      <form action="">
          
        <label >Pseudo :  </label>
        <input type="text" id="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
        <br />
        
        <br />
        
        <label >mot de passe : </label>
        <input type="password" id="mot de passe"
          value={mdp}
          onChange={e=>setMdp(e.target.value)}
        />
        
        <br />
        
        <br />
        <button className = "btn btn-success start"
          onClick = { onSubmit } > connexion 
        </button>
      </form>
    </div>
          
  );
}
  

export default Connexion;