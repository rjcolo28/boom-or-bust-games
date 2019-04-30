import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios"
import "./styles.css";
import API from "../../utils/API";


class loginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            RedirectTo: null
        }
        this.handleFormSubmition = this.handleFormSubmition.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmition = event => {
        event.preventDefault();
        // console.log("hi")
        axios.post("/user/login", {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            console.log('login response: ')
            console.log(response)
            if (response.status === 200) {
                // update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                })
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/'
                })
            }
        }).catch(error => {
            console.log('login error: ')
            console.log(error);

        })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="row" id="top">
                    <form className="col s6" id="loginForm">
                        <h1>Log In</h1>
                        <div className="input-field col s12">
                            <input id="Username" type="text" className="validate"  value= {this.state.username} onChange={this.handleChange} name="username"></input>
                            <label htmlFor="Username">Username</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="Password" type="password" className="validate" value= {this.state.password} onChange={this.handleChange} name="password"></input>
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
}

export default loginForm;