import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./styles.css";
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";

class loginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            RedirectTo: null,
            signInError: "",
            isLoading: ""
        }
        this.handleFormSubmition = this.handleFormSubmition.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const obj = getFromStorage("main_app");
        if (obj && obj.token) {
            const {token} = obj;
            //   verity token
            fetch("/api/account/verify?token=" + token)
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

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmition = event => {
        event.preventDefault();
        // grab state
        const {
            signUpPassword,
            signUpUsername
        } = this.state;
        // post request to back end
        fetch("/api/account/signin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: signUpUsername,
                password: signUpPassword
            }),
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    setInStorage("main_app", { token: json.token })
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        username: "",
                        password: "",
                    })
                } else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                    })
                }
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
                            <input id="Username" type="text" className="validate" value={this.state.username} onChange={this.handleChange} name="username"></input>
                            <label htmlFor="Username">Username</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="Password" type="password" className="validate" value={this.state.password} onChange={this.handleChange} name="password"></input>
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