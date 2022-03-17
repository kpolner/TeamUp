//Sign up page. Prakash will enter his signup code here
export default function SignUp() {
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
                <input type="text" placeholder="Full Name" class="input" />
            </div>
            <div class="input_field">
                <input type="text" placeholder="E-mail" class="input" />
            </div>
            <div class="input_field">
                <input type="text" placeholder="Username" class="input" />
            </div>
            <div class="input_field">
                <input type="password" placeholder="Password" class="input" />
            </div>
            <div class="input_field">
                <input type="password" placeholder="Confirm Password" class="input" />
            </div>
            <div class="btn"><a href="#">Sign Up</a></div>
            <li><a href="/login" class="next-page">Already a user?  Sign in</a></li>
        </div>
    </div>
    </section> 
    );
  }