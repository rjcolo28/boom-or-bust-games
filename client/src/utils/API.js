import axios from "axios";

// we need a route here! maybe call it yeah newUser, you're fine, haha, it's a lot!
// but yeah we need to figure out what we need to pass into this function, if anything, so lets go back tooo umm I'm gonna look at a few files lol
// ok. 

// do you need this route to make sure login works too?   axios.post("/user/login"
//  i think so.  i was just trying stuff out last night. 

// yeah so the route inside of your forms (on the front end) where you call THIS file (EX: API.getReviews.post("path").then(function...blahblahblah)) need to match the routes or paths inside of here, and then correspond to your backend routes as well so they do in fact connect to your db... it helps me to write things out on paper to keep track of things, and to keep my naming consistent and logical, not sure if this is helping?

// you're super close. you've got a lot of good things going on here! you just need to connect the dots :)
// it was for me too, but ironically once you wrap your head around it it's actually the easiest code part haha

// I recommend keeping your login as a page for now to make it work, don't worry about the modal part, just get it working and connect your routes, then if all works maybe you'll have time to convert/migrate to a modal

// yeah stick to a functional MVP

// it's okay, ask... no dumb questions! lol ok

// yeah it is. that's the hard part for me lol. yeah i'm not using the modal anymore. it's too much of a. ok. it's a dumb question. just figured it out my self

// I just went through rapid fast and changed the the instances for this newUser route. so inside the /components/form/index.js, /routes/API/users.js, and in this file I made that path basically /api/newUser

// i saw that u called it just newUser  on the other file

// inside of the routes/API/users.js file it needs to just be /newUser because if you look at your server.js file (on the root of your project) there is code that pops /api in front of any route being used inside of those files inside of your routes

// OHH i lied you guys put yours inside of the index.js inside of routes, which is totallyyy fine, in fact some ways better

// back here... so just like that fix, all of those login routes and paths need to match in those 3 locations (front end place where you're calling the get or post action, here inside your front end API, and in your backend api routes files)

// you're so smart

// haha, nooo, I have just spent wayyyy tooo long on this stuff :P but before I leave you, do you think you have a grip on how to move forward and fix it? I have a few things I want to cleanup on my own project haha :P I don't want to leave you if you're still confused though

// yeah i think i can figure it out from here on out. thanks for the help

// one step at a time. one "action" at a time. in fact go back and test your login action first, because I'm not convinced it's doing what you want it do. add in console log's as you work to confirm what you think is happening. and just focus on small steps one at a time. you got this! and I'm mostly just at home working today too, so reach out if you get stuck again! I won't erase any of these comments as I leave. you can keep them to reference as you work, and clean them up later. Don't commit any code you don't want public on github :P

// alright

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
    }

};

