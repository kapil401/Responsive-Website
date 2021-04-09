import React from 'react';
import image from '../src/image1.jpg'
import Card from './Card.js'
const About = () =>
{
    return (
        <>

            <div>
                <selector id="header" className="d-flex align-items-center ">
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="my-4" style={{ backgroundImage: `url(${ image })` }}>
                                    <div className="col-10 mx-auto">
                                        <div className="row">
                                            <div className="col-md-6" >
                                                <div className="pt-5 pt-lg-5 order-2 order-lg-1 d-flex     justify-content-center  flex-column">
                                                    <h1> <strong> About Us</strong></h1>
                                                    <h2 className="my-4">
                                                        We create mobile apps that witnessed millions of downloads and installation. We at iByte Infomatics polish your raw ideas and blend the latest industry practices with innovation to create robust and business-friendly mobile apps
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            <div className="container-fluid mb-5">
                                <div className="row gx-4">
                                    <Card title='Who We Are'
                                        content="Located in Noida, iByte Infomatics is the most sought-after mobile app development company. We have a dynamic in-house team comprising of app designers, developers, QA professionals, and more. We cater to clients globally with the best-in-class mobile app development solutions." />
                                    <Card title='What We Do'
                                        content="We design and develop mobile and web applications implementing the latest trends to match the needs and expectations of businesses. Be it iOS or Android, we have mastered the art of harnessing the potential advantages of every platform and create world-class mobile app solutions. We are also specialized in UI/UX design, digital marketing, game app development, and wearable app development." />
                                    <Card title='How We Do It'
                                        content="At iByte Infomatics, we are a group of some creative minds who are aware of different needs of businesses and deliver the right solutions accordingly. We leave no stone unturned to match the satisfaction level of our clients. We create the best app incorporating your specific business needs and based on their market and target audience." />
                                </div>
                            </div>
                        </div>
                    </div>
                </selector>

            </div>



        </>
    );
}
export default About;