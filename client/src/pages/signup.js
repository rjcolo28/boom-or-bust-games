import React, { Component } from "react";
import Nav from "../components/navbar/index";
import { FormUser, FormPassword, Button } from "../components/form";
import {
    getFromStorage,
    setInStorage
} from "../utils/storage";
import API from "../utils/API";
import { BrowserRouter as Router, Route } from "react-router-dom";

class SignUp extends Component {
    state = {
        username: "",
        password: "",
        signUpError: "",
        isLoading: "",
        redirect: ""
    }


    componentDidMount() {
        // this.verify();
        // this.loadUser();
    }

    verify = () => {
        const obj = getFromStorage("main_app");

        if (obj && obj.token) {
            const { token } = obj;
            //   verity token
            API.verify("/api/account/verify?token=" + token)
                .then(res => res.text())
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

    loadUser = () => {
        API.getUser()
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = event => {
        // post request to back end
        API.newUser({
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            if(response.err) {
                alert("Server Error")
            }
        })
            // .then(json => {
            //     if (json.success) {
            //         this.setState({
            //             loadUserError: json.message,
            //             isLoading: false
            //         })
            //     } else {
            //         this.setState({
            //             signUpError: json.message,
            //             isLoading: false,
            //         })
            //     }
            }

    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <FormUser
                        value={this.state.username}
                        onChange={this.handleChange}
                        name="username"
                    />
                    <FormPassword
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                    />
                    <Button
                        onClick={this.handleSubmit}
                    />
                </div>
            </div>
        );
    }
}

export default SignUp;
