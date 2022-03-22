import * as React from 'react';
import axios from 'axios';
//Might be buggy
//Adds a new user in the user table
//change to vm
export class SignUpButton extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            type:"User",
            username1: "",
            fullname1: "",
            email1: "",
            password1: "",
        };
    };
    signUp() {
        if(document.getElementById("passwordfield").value === document.getElementById("confirmpasswordfield").value)
        {
            this.state =
        {
            fullname1: document.getElementById("fullnamefield").value,
            email1: document.getElementById("emailfield").value,
            username1: document.getElementById("usernamefield").value,
            password1: document.getElementById("passwordfield").value, 
        };
        axios.post("localhost:9000/UserController", this);
        alert("Welcome to TeamUp!");
        }
        else{
            alert("Your passwords do not match.")
        }
    }
    render() {
    return (
        <div class="btn" onClick={() => this.signUp()}>Sign Up</div>
    )    
}
}