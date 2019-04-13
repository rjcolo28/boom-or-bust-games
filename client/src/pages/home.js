import React, { Component } from "react";
import Nav from "../components/navbar/index";

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
     <Nav />
    );
  }
}

export default Home;
