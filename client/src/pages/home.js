import React, { Component } from "react";
import Nav from "../components/navbar/index";
import Card from "../components/game card/index"

const jumbotronStyle = {
  paddingBottom: '150px',
  boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}

class Home extends Component {
  // state = {

  // };

  // componentDidMount() {

  // }

  //   loadBooks = () => {
  //     API.getBooks()
  //       .then(res => this.setState({ books: res.data }))
  //       .catch(err => console.log(err));
  //   };

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
        < Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Home;
