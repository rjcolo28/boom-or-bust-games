import React from "react";
import "./styles.css";

function UserInfo() {
    return (
        <div>
            <div className="row">
                <div className="col s2">
                    <img className="materialboxed" width="250" src="https://materializecss.com/images/sample-1.jpg" alt="" id="userImage"></img>
                </div>
                <div className="col s6" id="c1">
                    <h2 id="username">Username</h2>
                    <div id="buttons">
                        <a class="waves-effect waves-light btn-large">Want</a>
                        <a class="waves-effect waves-light btn-large">Playing</a>
                        <a class="waves-effect waves-light btn-large">Played</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default UserInfo;