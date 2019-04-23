import React from "react";
import "./styles.css";

function UserInfo() {
    return (
        <div>
            <div className="card">
                <div className="row">
                    <div className="col s2 va">
                        <img className="circle responsive-img" width="100" height="150" src="https://materializecss.com/images/sample-1.jpg" alt="" id="uImg"></img>
                    </div>
                    <div className="col s6">
                        <div>
                            <h5 id="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales tempus odio vitae sagittis. Suspendisse id semper nunc, vitae egestas ex. Duis imperdiet tristique tempus. Suspendisse porttitor eros nec fermentum fringilla. Pellentesque ac risus felis. Sed sed quam nulla. Donec id ex non turpis aliquam luctus. Nullam ut ante ultrices, commodo ipsum rhoncus, semper augue. Nulla lobortis tellus sed enim gravida, eget tristique arcu gravida. Vivamus non ante vitae lacus finibus laoreet. Etiam id suscipit ante, vel hendrerit neque. Morbi porttitor non ante sed porta. Pellentesque at iaculis dolor.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <form id="review" className="col s12">
                    <div className="row">
                        <div className="col s3"></div>
                        <div className="input-field col s6">
                            <input id="input_text" type="text" data-length="10"></input>
                            <label htmlFor="input_text">Your Review</label>
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                            <div className="col s3"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default UserInfo;