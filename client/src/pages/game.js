import React, { Component } from "react";
import Nav from "../components/navbar/index";
import Card from "../components/game card/index";
import GameReviews from "../components/gameReviews/index";



class GamePage extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Card/>
                <GameReviews/>
            </ div>
        );
    }
}

export default GamePage;
