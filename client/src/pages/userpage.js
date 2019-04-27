import React, { Component } from "react";
import Nav from "../components/navbar/index";
import UserInfo from "../components/User info/index";
import UserReview from "../components/userReview/index";



class UserPage extends Component {
    render() {
        return (
            <div>
                <Nav />
                <UserInfo />
                <UserReview/>
            </ div>
        );
    }
}

export default UserPage;
