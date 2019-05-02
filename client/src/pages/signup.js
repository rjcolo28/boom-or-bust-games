import React, { Component } from "react";
import Nav from "../components/navbar/index";
import { FormUser, FormPassword, Button } from "../components/form";
import {
    getFromStorage,
    setInStorage
} from "../utils/storage";
import API from "../utils/API";

class SignUp extends Component {
    state = {
        signUpUsername: "",
        signUpPassword: "",
        signUpError: "",
        isLoading: ""
    }


    componentDidMount() {
        // this.verify();
        this.signUp();
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

    signUp = () => {

    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit() {
        // post request to back end
        API.newUser().then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false
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
        return (
            <div>
                <Nav />
                <div className="container">
                    <FormUser
                        value={this.state.signUpUsername}
                        onChange={this.handleChange}
                        name="signUpUsername"
                    />
                    <FormPassword
                        value={this.state.signUpPassword}
                        onChange={this.handleChange}
                        name="signUpPassword"
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
