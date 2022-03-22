import axios from "axios";
import React from "react";
import GlobalLogin from "./GlobalLogin";

export class LoginButton extends React.Component {
    constructor(props) {
        super(props);
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
        // store jwt here local storage
        // use it to validate endpoint you use through out application
    };

    render() {
        return (
            <div class="btn" onClick={() => this.login()}>Log In</div>
        )
    }
}