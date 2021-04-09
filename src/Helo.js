import React from 'react';
import Web from '../src/img2.jpeg';
import About from './About';
import Services from './Services';
import Css from './Page.css';

function Helo()
{
    return (
        <>

            <div>
                <selector id="header" className="d-flex align-items-center">
                    <div className="container-fluid nav_bg">
                        <div className="row">

                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div class="col-md-6">
                                        <div className="pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center  flex-column">
                                            <h1>Grow your business with <strong> Sir</strong>
                                            </h1>
                                            <h2 className="my-3">
                                                We are the team of developer making websites
                                                    </h2>
                                            <button id="but">
                                                <a href="" className="btn-get-started">GetStart</a>
                                            </button>
                                        </div>

                                    </div>
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column">
                                        <div className="col=lg-6 order-1 order-lg-2 header-img " >
                                            <img src={Web} className="img-fluid animated" alt="home img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                         

                    </div>
                </selector>
               
                         
            </div>
            
                         
        </>
    );

}
export default Helo;