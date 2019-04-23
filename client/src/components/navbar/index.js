import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav (){
    return( 
        <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
           <Link Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Logo
           </Link>
          </a>
          <form action="" method="post">
                <div className="input-field">
                    <input id="search" type="search" name="search"></input>
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </form>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link Link to="/signup" className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
            
    );
}

export default Nav;