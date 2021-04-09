import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import wet from '../src/web.jpg';
import App from '../src/app.jpg';
import software from '../src/software.jpg';


const Services = () =>
{
    return (
        <>
            <div className="my-4">
                <h1 className="text-center">Services we <super>Provide</super></h1>
                <h5 className="text-center">We at iByte Infomatics understand that every business is different in terms of their specific needs and goals.
                </h5>
                <h5 className="text-center"> Our ranges of services are meant to match a diverse need of businesses from different industries.</h5>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <Card img={wet}
                                title='Web Development'
                                content='Bestowed with a dynamic team of web app developers, 
                                  we create the best-in-class web applications with a tantalizing interface to make it e
                                  ngaging and sales-driven.'

                            />

                            <Card img={App}
                                title='App Development'
                                content='As a top mobile app development company, our zealous developers are versed with the latest trends 
                                and tools and leverage these to build scalable 
                                and performance-packed mobile apps.'

                            />
                            <Card img={software}
                                title='Software Development'
                                content='Software development is the process of conceiving, specifying, designing, programming, documenting, testing,
                                 and bug fixing involved in creating and maintaining applications'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Services;