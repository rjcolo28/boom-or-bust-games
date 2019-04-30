import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import logo from "./image/logo.png"
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage";

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
        username: "",
        password: "",
        RedirectTo: null,
        signInError: "",
        isLoading: "",
        token: ""
    }
}
  
  Logout() {
    const obj = getFromStorage("main_app");

    if (obj && obj.token) {
      const { token } = obj;
      this.setState({token: obj.token})
      //   verity token
      fetch("/api/account/Logout?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: token,
              isLoading: false
            })
          } else {
            this.setState({
              isLoading: false
            })
          }
        })
    }
    else {
      this.setState({
        isLoading: false,
      })
    }
  }

  render() {
    const {
      token
    } = this.state;

    if(token){
      return(
        <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <img id="logo" alt="logo" href={logo}></img>
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
                <button onClick={ this.Logout}>
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      )
    }
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              <img id="logo" alt="logo" href={logo}></img>
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
                <a href="/login" >Log In</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>


    );
  }
}

export default Nav;