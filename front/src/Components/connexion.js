import React from "react";
const Validator = require("validator");
const Axios= require ('axios');
class connexion extends React.Component{
    constructor(props){
      super(props);
      this.state={
        email:"",
        mdp:"",
      
      };
      
    }
    onChange=(e)=>  {
      this.setState({[e.target.id]: e.target.value });
    };
    
      
        
        
    onSubmit= (e)=>{
      e.preventDefault();
     
        const data= {
          email:this.state.email,
          mdp: this.state.mdp
        };
        Axios.post("/login", data)
        .then ((response) => {
          if (response.data.token){
            localStorage.setItem('token', response.data.token);
            alert("connexion effectuée avec succès");
            window.location.href="/Lister";
          }else {

            alert(response.data.erreur);
          }
        })
        .catch ((error) =>{
          console.log(error);
        })
        this.setState({
          email:"",
          mdp:"",
        });
    
      
    };
    
    render(){
      return (
        <div>
        
        <h1>connexion </h1>
    
        <form action="">
          
            <label >Pseudo: </label>
          <input type="text" id="email"
          value={this.state.email}
          onChange={this.onChange}
          />
         <br />
        
        <br />
        
        <label >mdp:</label>
        
       
       <input type="password" id="mdp"
       value={this.state.mdp}
       onChange={this.onChange}
        />
       <br />
        
          <br />
          <button className = "btn btn-success start"
            onClick = { this.onSubmit } > connexion 
            </button>
          </form>
         
          </div>
      );
    }


   
}
export default connexion;