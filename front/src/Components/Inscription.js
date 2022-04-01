import React from "react";
const Axios= require ('axios');
class Inscription extends React.Component{
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
    onSubmit= e =>{
        const data= {
          email:this.state.email,
          mdp: this.state.mdp
        };
         Axios.post("/inscription", data)
        .then ((response)=>{ 

          if (!response.data.erreur){
            console.log(response.data.erreur)
            alert("création effectuée");
            window.location = "/connexion";
            
          }
          else {
            console.log(response.data.erreur)
            alert(response.data.erreur);
          }
          
        })
        .catch((error)=>{
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
        
        <h1>Inscription </h1>
    
        <form action="">
          <label >Pseudo: </label>
           
          <input type="text" id="email"
          value={this.state.email}
          onChange={this.onChange}
          />
         <br />
        
        <br />
        
        <label>mdp:</label>
       <input type="password" id="mdp"
       value={this.state.mdp}
       onChange={this.onChange}
        />
       <br />
        
          <br />
          <button className = "btn btn-success start"
            onClick = { this.onSubmit } > Enregistrer 
            </button>
          </form>
         
          </div>
      );
    }


   
}
export default Inscription;