import React from "react";
import "./styles.css";

function GameReviews(props) {
    return (
        <div>
            <div className="row">
                <div className="card col s12">
                    <div className="col s2">
                        <img className="circle responsive-img" width="100" height="150" src="https://materializecss.com/images/sample-1.jpg" alt="" id="uImg"></img>
                    </div>
                    <div className="col s6">
                        <div>
                            <h5 id="p">{props.review}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameReviews;