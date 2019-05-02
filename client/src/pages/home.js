import React, { Component } from "react";
import Nav from "../components/navbar/index";
import Card from "../components/game card/index"
import API from "../utils/API";
import logo from "./logo.png"


const jumbotronStyle = {
  backgroundImage: "url(" + logo + ")",
  paddingBottom: '150px',
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}

class Home extends Component {

  state = {
    games: []
  }

  componentDidMount() {
    API.getGames(this.props)
      .then(res => this.setState({ games: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="card-panel grey lighten-2" style={jumbotronStyle}>
          <div className="container">
            <h1>Welcome</h1>
            <h5>Is your favorite game Booming the market, or a total Bust? Find what everyone else thinks here!</h5>
          </div>
        </div>
        {this.state.games.map(game => 
          <Card 
            id={game._id}
            key={game._id}
            title={game.title}
            image={game.image}
            summary={game.summary}
          />
          )}
          <Card/>
      </div>
    );
  }
}

export default Home;
