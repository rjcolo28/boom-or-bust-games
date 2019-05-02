import React, { Component } from "react";
import Nav from "../components/navbar/index";
import Info from "../components/gamepageInfo";
import {TextArea, FormBtn} from "../components/reviewSubmit";
import GameReviews from "../components/gameReviews/index";
import API from "../utils/API"



class GamePage extends Component {

    state = {
        game: {},
        reviews: [],
        review: ""
    }

    loadGame = () => {
        API.getGame(this.props.match.params.id)
            .then(res => this.setState({ game: res.data }))
            .catch(err => console.log(err));
    };

    loadReviews = () => {
        API.getReviews(this.props.match.params.id)
            .then(res => this.setState({ reviews: res.data.reviews} ))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadGame()
        this.loadReviews()
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        if(this.state.review) {
            API.submitReview({
                game_id: this.state.game._id,
                review: this.state.review
            })
        .then(res => this.loadGame(res))
        .then(this.setState({ review: "" }))
        .catch(err => console.log(err))
        }
    }



    render() {
        return (
            <div>
                <Nav />
                <Info
                    title={this.state.game.title}
                    platforms={this.state.game.platforms}
                    genres={this.state.game.genres}
                    image={this.state.game.image}
                    summary={this.state.game.summary}
                />
                <form>
                    <TextArea
                        value={this.state.review}
                        onChange={this.handleInputChange}
                        name="review"
                        placeholder="Write your own review here"
                    />
                    <FormBtn
                        onClick={this.handleFormSubmit}
                    />
                </form>
                <br></br>
                {this.state.reviews.map(review =>
                    <GameReviews
                        id={review._id}
                        key={review._id}
                        review={review.review}
                    />
                )}
            </ div>
        );
    }
}

export default GamePage;
