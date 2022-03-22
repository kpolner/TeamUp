// Login Page
import { LoginButton } from "../page elements/LoginButton";
import React, { Component } from 'react';
class Login extends React.Component {
    constructor(){
        super();
        this.state={name: '', password: ''}
    }
    render() {
        return (
        <section className="general" id="login">
            <div className="wrapper login" id="wrapper">
                <div className="container">
                    <div className="tabs">
                        <ul>
                            <li className="sign_in_li">Sign in</li>
                        </ul>
                    </div>
                    <div className="input_field">
                        <input  className="input" value={this.state.name} type="text" id="name" onChange={(e) => {
                            this.setState({name: e.target.value})
                        }}/>

                    </div>
                    <div className="input_field">
                        <input className="input" value={this.state.password} type="Password" id="loginpassword" onChange={(e) => {
                            this.setState({password: e.target.value})
                        }}/>
                    </div>
                    <LoginButton props={this.state}/>
                    <li><a href="/signup" className="next-page">Not a user? Sign Up</a></li>
                </div>
            </div>
        </section>
    )
    }
}
export default Login;
