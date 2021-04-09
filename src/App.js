import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';
import Services from './Services';
import Contect from './Contect';
import{Switch,Route, Redirect} from "react-router-dom";
import Nav from './Navbar';
import User from './User';
import Cal from'./Cal.js';

 


const App=()=>
{
  return (
    <>
      <Nav /> 
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact  path="/Services" component={Services} />
      <Route  exact path="/Contect" component={Contect} />
      <Redirect to="/" /> 
    
    </Switch> 
  
     {/* <Cal />
    <Cal /> 
     */}

</>
  );
}

export default App;
