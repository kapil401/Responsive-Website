import React from 'react';
import { NavLink } from 'react-router-dom';
import ibyte from '../src/ibyte.jpg';
const Nav = () =>
{
  return (

    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img className="imag" src={ibyte} alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li cla ssName="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Services">Services</NavLink>
                    </li>


                    <li className="nav-item">
                      <NavLink className="nav-link" to="/Contect">Contect</NavLink>
                    </li>

                  </ul>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

    </>

  );
}
export default Nav;