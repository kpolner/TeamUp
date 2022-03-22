import axios from "axios";
import React from "react";
import GlobalLogin from "./GlobalLogin";

export class LoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username1: "",
            password: "",
            userlist: []
        }
        };

    async login() {
        console.log(this.props.name)
        console.log(this.props.password)
        let token = await axios.get('localhost:9000/UserController/Username',
            {
                params: {
                    username1: this.props.name,
                    password: this.props.password,
                }
            }
        )
        let currentUser = response.data.results;
        this.setState({userlist: currentUser});

        let inputtedUser = document.getElementById("name").value;
        let inputtedPassword = document.getElementById("loginpassword").value;

        let match = userlist.filter(currentUser => currentUser.username = inputtedUser);
        if (match.length === 0)
        {
            alert("Incorrect username or password.");
        }
        else if (match[0].password != inputtedPassword)
        {
            alert("Incorrect username or password.");
        }
        else if (match[0].password === inputtedPassword)
        {
            // login the user
            // provide functionality to events
            // set the home page display to the user
            // change the navbar to user, 'sign out', 'discover'
        }

        // store jwt here local storage
        // use it to validate endpoint you use through out application
    };

    render() {
        return (
            <div class="btn" onClick={() => this.login()}>Log In</div>
        )
    }
}