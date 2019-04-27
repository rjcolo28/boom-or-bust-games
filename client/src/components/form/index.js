import React, { Component } from 'react'
import axios from 'axios'
import "./styles.css";

class Form extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            confirmPassword: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);

        axios.post("user/", {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            console.log(response)
            if (!response.data.errmsg) {
                console.log('successful signup')
                this.setState({ //redirect to login page
                    redirectTo: '/login'
                })
            } else {
                console.log('username already taken')
            }
        }).catch(error => {
            console.log('signup error: ')
            console.log(error)
        })
    }

    render() {
        return (
            <div className="container" id="from" >
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="Username" type="text" className="validate" value={this.state.username} onChange={this.handleChange}></input>
                                <label htmlFor="Username">Username</label>

                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" value={this.state.password} onChange={this.handleChange}></input>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="confirm" type="email" className="validate" value={this.state.confirmPassword} onChange={this.handleChange}></input>
                                <label htmlFor="confirm">Confirm Password</label>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;