import React, { useState, useEffect} from 'react'
import axios from "axios"
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import "../cssfile/loginstyle.css"
import StudentDash from "./StudentDash"

export default function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState([]);
  const [displayedContent, setDisplayedContent] = useState(null);
  const [userName, setUserName] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost/api/studentLoginP.php', {
        email: email,
        password: password
      });

      console.log(response.data);
      setUser(response.data.phpresult);
      setDisplayedContent(response.data.phpresult);
      setUserName(response.data.phpname);
      // Redirect the user to the dashboard page
    } catch (error) {
      console.log(error);
    }
  };

  

  switch (displayedContent) {
    case 'Sorry! User Not found':
      return (
        <div>
          <p>Sorry! User Not found</p>
        </div>
      );
      case 'Please input correct password':
        return (
          <div>
            <p>Please input correct password</p>
          </div>
        ); 
         case 'ok':
        return (
          <div>
            <p><StudentDash userName={userName} email={email}/> </p>
          </div>
        );  
  
    default:
    return (
      <body class="b-2">
      <section class="sec-1">
      <div class="box">
      <div class="inner-box">
        <div class="forms-wrap">
          <form autoComplete="off" class="sign-in-form" onSubmit={handleSubmit}>
            <div class="logo">
              <h4 class="login_page">TutiPie</h4>
            </div>

            <div class="heading">
              <h2>Welcome</h2>
              <h6>Not registred yet?</h6>
              <Link to="/studentReg">Sign up</Link>
            </div>

            <div class="actual-form">
              <div class="input-wrap">
                <input type="text" class="input-field" autoComplete="off" required name="email"    id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}/>
                <label class="user_id_pass">User ID</label>
              </div>

              <div class="input-wrap">
                <input type="password" class="input-field" autoComplete="off" required name="password" id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
                <label class="user_id_pass">Password</label>
              </div>

              <button type="submit"  class="sign-btn"  >Log In</button>
            </div>
          </form>
          <div class="heading">
              <h6>Forget password?</h6>
              <Link to="/forgetpasswordstu">Click here</Link>
            </div>

          
        </div>

        <div class="carousel">
          <div class="images-wrapper_student">
            <img class="image img-1 show" />
          </div>

          <div class="text-slider">
            <div class="text-wrap">
              <div class="text-group">
                <h2>Find Teachers</h2>
              </div>
            </div>

            <div class="bullets">
              <span class="active" data-value="1"></span>
              <span data-value="2"></span>
              <span data-value="3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </body>
    );
}
}
