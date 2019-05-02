import React, { Component } from 'react';
import "./styles.css";

export function FormUser(props) {

    return (
            <div className="row">
                    <h1>Sign Up</h1>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="Username" type="text" className="validate" name="signUpUsername" {...props}></input>
                            <label htmlFor="Username">Username</label>

                        </div>
                    </div>

            </div>
 
    )
}

export function FormPassword(props) {
    return (
        <div className="row">
            <div className="input-field col s12">
                <input id="password" type="password" className="validate" name="signUpPassword" {...props}></input>
                <label htmlFor="password">Password</label>
            </div>
        </div>
    )
}

export function Button(props) {
    return (
        <button className="btn waves-effect waves-light" href="/login" type="submit" name="action" {...props}> {props.children}Submit
            <i className="material-icons right">send</i>
        </button>
    )
}