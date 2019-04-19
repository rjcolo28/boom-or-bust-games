import React, { Component } from "react";
import Nav from "../components/navbar/index";
import Form from "../components/form/index";

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
                <Form />
            </div>
        );
    }
}

export default Home;
