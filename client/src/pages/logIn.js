import React, { Component } from "react";
import Nav from "../components/navbar";
import LoginForm from "../components/login"
// import API from "../utils/API";




class Login extends Component {

    // state = {
    //     games: []
    // }

    // componentDidMount() {
    //     API.getGames(this.props)
    //         .then(res => this.setState({ games: res.data }))
    //         .catch(err => console.log(err));
    // };

    render() {
        return (
            <div>
                <Nav />
                <LoginForm/>
            </div>
        );
    }
}

export default Login;
