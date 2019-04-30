import React, { Component } from "react";
import Nav from "../components/navbar/index";
import Form from "../components/form/index";


// Allie changed to class SignUp (used to be Home...was confusing...lol)

// i was using a modal before for the sign up 

// yeah so now it's just a form page? yep nothing wrong with that, right? if you're asking if it works. it does, yeah let's make sure you have something functioning before you try to make it "fancy" in a modal or however it looks "ideally" 

// alright .. so where is this signup part breaking? it's not breaking anymore. im just trying to send the info to the mongo database . ahh okay we need to check the routes to make sure you're creating a new user in the db ok let me check some more code now that I know what to look for, we'll delete these comments when we're done, but keep them here for now for reference :P

// ok

class SignUp extends Component {
  
    render() {
        return (
            <div>
                <Nav />
                <Form />
            </div>
        );
    }
}

export default SignUp;
