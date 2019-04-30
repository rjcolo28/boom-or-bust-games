import React, { Component } from "react";
import Nav from "../components/navbar/index";
import Card from "../components/game card/index"
import API from "../utils/API";


const jumbotronStyle = {
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
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="card-panel grey lighten-2" style={jumbotronStyle}>
          <div className="container">
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
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
