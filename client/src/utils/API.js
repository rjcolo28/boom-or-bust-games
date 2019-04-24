import axios from "axios";

export default {
    getGames: function() {
        return axios.get("api/games");
    },
    getGame: function(id) {
        return axios.get("api/games/" + id);
    },
    getUser: function(id) {
        return axios.get("api/users/" + id);
    },
    getReviews: function() {
        return axios.get("api/reviews");
    },
    getReview: function(id) {
        return axios.get("api/reviews" + id);
    }
};

