import React from 'react';
import About from './About';
import Helo from './Helo';
import Services from './Services';
import Css from './Page.css';
// import { Content } from 'react-bootstrap/lib/Tab';
import Content from './Contect';

function Home(){
    return(
        <>
        <div>
        <Helo />
       </div>
       <div className="contanier">
           <About />
       </div>
       <div className="container2">
           <Services />
       </div>
       <div className="container1">
           <Content />
           </div>
        </>
    )
}
export default Home;