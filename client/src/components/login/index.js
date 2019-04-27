import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./styles.css";


class loginForm extends Component {
    handleFormSubmition = event => {
        event.preventDefault();
        console.log("hi")
    }

    render() {
        return (
            <div className="row">
                <form className="col s6" id="loginForm">
                    <h1>Log In</h1>
                    <div className="input-field col s12">
                        <input id="Username" type="text" className="validate"></input>
                        <label htmlFor="Username">Username</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="Password" type="password" className="validate"></input>
                        <label htmlFor="Password">Password</label>
                    </div>

                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleFormSubmition}>Log In
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default loginForm;