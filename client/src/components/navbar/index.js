import React from "react";
import "./style.css";

function Nav (){
    return( 
        <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          <form action="" method="post">
                <div className="input-field">
                    <input id="search" type="search" name="search"></input>
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </form>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">Sign Up/Log In</a></li>
            </ul>
          </div>
        </nav>
      </div>
            
    );
}

export default Nav;