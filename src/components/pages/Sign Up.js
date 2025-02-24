//Sign up page
//form with full name, email, user, pass, confirm pass, links to login page if already signed up
import { useEffect, useState } from "react";
import axios from "axios";
export default function SignUp() {
    const [userEmail, setUserEmail] = useState('');
    const [emailErr, setEmailErr] = useState();
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState();
    const [matchError, setMatchError] = useState();
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
        )
    const validPassword = new RegExp(
        '^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$'
    )
    // useEffect(() => {
    //     if(emailErr === false && passwordError === false)
    //     {
    //         console.log(emailErr + "email " + passwordError + "pw")
    //         signUp();
    //     }
    // } ,[emailErr]);
    useEffect(() => {
        if(emailErr === false && passwordError === false && matchError === false)
        {
            console.log(emailErr + "email " + passwordError + "pw")
            signUp();
        }
    }, [passwordError, emailErr, matchError]);
    function validate() {
        if(!validEmail.test(userEmail))
        {
            setEmailErr(true);
        }
        else{
            setEmailErr(false);
        }
        if(!validPassword.test(password))
        {
            setPasswordError(true);
        }else
        {
            setPasswordError(false);
        }
        if(password !== document.getElementById("confirmpasswordfield").value)
        {
            setMatchError(true);
        }
        else
        {
            setMatchError(false);
        }
    }
    async function signUp() {
        //takes all the data from the sign up form and posts it to the database;
            const newUser =
        {
            'fullname1': document.getElementById("fullnamefield").value,
            'email1': userEmail,
            'username1': document.getElementById("usernamefield").value,
            'password1': password, 
        };
        try {
            const resp = await axios.post("http://localhost:9000/user1", newUser);
            console.log(resp.data);
            alert("Welcome to TeamUp");
        }catch(e)
        {
            console.log(e);
        }
    }
    return (
        <section class="general" id="signup">
      <div class="wrapper" id="wrapper">
        <div class="container">
            <div class="tabs">
                <ul>
                  <li class="sign_in_li">Sign Up</li>
                </ul>
            </div>
            <div class="input_field">
                <input type="text" placeholder="Full Name" class="input" id="fullnamefield"/>
            </div>
            <div class="input_field">
                <input type="email" placeholder="E-mail" class="input" id="emailfield" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            </div>
            <div class="input_field">
                <input type="text" placeholder="Username" class="input" id="usernamefield" />
            </div>
            <div class="input_field">
                <input type="password" placeholder="Password" class="input" id="passwordfield" value ={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="input_field">
                <input type="password" placeholder="Confirm Password" class="input" id="confirmpasswordfield"/>
            </div>
            <div class="btn" onClick={() => validate()}>Sign Up</div>
            {emailErr && <p class="regexError">Invalid email.</p>}
            {passwordError && <p class="regexError">Invalid password. Please use 8 characters including 1 capital and 1 number</p>}
            {matchError && <p class="regexError">Your passwords do not match.</p>}
            <li><a href="/login" class="next-page">Already a user?  Sign in</a></li>
        </div>
    </div>
    </section> 
    );
  }