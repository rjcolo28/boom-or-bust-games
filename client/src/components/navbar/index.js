import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./style.css";


class Nav extends Component {
  
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Logo
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
                <a href="/signup">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" >Log In</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    );
  }
}

export default Nav;