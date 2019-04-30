import axios from "axios";

export default {
    getGames: function() {
        return axios.get("api/games");
    },
    getGame: function(id) {
        return axios.get("/api/games/" + id);
    },
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },
    getReviews: function() {
        return axios.get("api/reviews");
    },
    getReview: function(id) {
        return axios.get("/api/reviews" + id);
    },
    submitReview: function(reviewData) {
        return axios.post("/api/reviews", reviewData)
    },
    newUser: function(){
        return axios.post("/api/newUser")
    },
    logout: function(){
        return axios.post("/api/logout")
    },
    signin: function(){
        return axios.post("/api/signin")
    }

};

