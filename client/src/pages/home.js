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
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      games: []
    }

    // this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    // this.getUser();
    API.getGames(this.props)
    .then(res => this.setState({ games: res.data }))
    .catch(err => console.log(err));
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  // getUser() {
  //   axios.get('/user/').then(response => {
  //     console.log('Get user response: ')
  //     console.log(response.data)
  //     if (response.data.user) {
  //       console.log('Get User: There is a user saved in the server session: ')

  //       this.setState({
  //         loggedIn: true,
  //         username: response.data.user.username
  //       })
  //     } else {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: false,
  //         username: null
  //       })
  //     }
  //   })
  // }
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
