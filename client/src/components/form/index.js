import React from "react";
import "./styles.css";

function Form() {
    return (
        <div className="container" id="from">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate"></input>
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"></input>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"></input>
                            <label htmlFor="email">Email</label>
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

export default Form;