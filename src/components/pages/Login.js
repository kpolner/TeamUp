// Login Page. Prakash will enter his login code here 
export default function Login() {
    return (
        <section class="general" id="login">
         <div class="wrapper login" id="wrapper">
        <div class="container">
            <div class="tabs">
                <ul>
                  <li class="sign_in_li">Sign in</li>
                </ul>
            </div>
            <div class="input_field">
                <input type="text" placeholder="Username" class="input" />
            </div>
            <div class="input_field">
                <input type="password" placeholder="Password" class="input" />
            </div>
            <div class="btn"><a href="#">Sign in</a></div>
            <li><a href="/signup" class="next-page">Not a user?  Sign Up</a></li> 
        </div>
    </div>
    </section> 
    );
  }