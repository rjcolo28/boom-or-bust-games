import React, { Component } from "react";
import Nav from "../components/navbar/index";
import Form from "../components/form/index";

class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Form />
            </div>
        );
    }
}

export default Home;
