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
        return axios.get("/api/games/populate/" + id);
    },
    getReview: function(id) {
        return axios.get("/api/reviews/" + id);
    },
    submitReview: function(reviewData) {
<<<<<<< HEAD
        return axios.post("/api/reviews", reviewData)
    },
    newUser: function(){
        return axios.post("api/users/signup")
    },
    logout: function(){
        return axios.post("/api/logout")
    },
    signin: function(){
        return axios.post("/api/signin")
    },
    verify: function(token){
        return axios.post("/api/account/verify?token=" + token)
=======
        return axios.post("/api/reviews", reviewData);
>>>>>>> master
    }

};

