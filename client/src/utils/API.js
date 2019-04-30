import axios from "axios";

export default {
    getGames: function() {
        return axios.get("api/games");
    },
    getGame: function(id) {
        return axios.get("/api/games/info/" + id);
    },
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },
    getReviews: function(id) {
        return axios.get("api/games/populate/" + id);
    },
    getReview: function(id) {
        return axios.get("/api/reviews" + id);
    },
    submitReview: function(reviewData) {
        return axios.post("/api/reviews", reviewData);
    }
};

