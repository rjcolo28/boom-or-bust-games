import React, { Component } from 'react';
import "./styles.css";
import {
    getFromStorage,
    setInStorage
} from "../../utils/storage";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signUpUsername: "",
            signUpPassword: "",
            signUpError: "",
            isLoading: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit() {
        // grab state
        const {
            signUpPassword,
            signUpUsername
        } = this.state;
        // post request to back end
        fetch("api/users/account/signup", {
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
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpUsername: "",
                        signUpPassword: "",
                    })
                } else{
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                    })
                }
            })
    }

    render() {
        const {
            isLoading,
            token
        } = this.state;

        return (

            <div className="container" id="from" >
                <div className="row">
                    <form className="col s12">
                        <h1>Sign Up</h1>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="Username" type="text" className="validate" name="signUpUsername" value={this.state.signUpUsername} onChange={this.handleChange}></input>
                                <label htmlFor="Username">Username</label>

                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" name="signUpPassword" value={this.state.signUpPassword} onChange={this.handleChange}></input>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleSubmit}>Submit
                                <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;