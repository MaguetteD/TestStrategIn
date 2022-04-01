import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Lister from './Components/Lister'
import Accueil from './Components/Accueil'
import Inscription from './Components/Inscription'
import Connexion from './Components/connexion'
import Deconnexion from './Components/deconnexion'
class App extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return ( 
            <div >
            <Router >
            

            <Routes>
           
            
            <Route exact path = "/"
            element = { < Accueil / > }
            /> 
            <Route exact path = "/Inscription"
            element = { < Inscription/ > }
            /> 
            <Route exact path = "/connexion"
            element = { < Connexion / > }
            />
            <Route exact path = "/Lister"
            element = { < Lister / > }
            /> 
            <Route exact path = "/deconnexion"
            element = { < Deconnexion / > }
            /> 

            </Routes>

            
            </Router> 
            </div>



        )
    }
}

export default App