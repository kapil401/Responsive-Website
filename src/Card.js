import React from "react";
import { NavLink } from "react-router-dom";
import Css from './Page.css';




const Card = (props) =>
{
    return (
        <>
              
            <div className="col-md-4 col-10 mx-auto">
            <h1 className="text-center"></h1>
                <div className="card">
                
                    <div className="card-body">

                        <img className="wet" src={props.img}/>
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.content}</p>
                        <NavLink to="#" class="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Card;