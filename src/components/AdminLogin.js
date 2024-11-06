import React, { useState, useEffect} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

import "../cssfile/Admin_login.css"
export default function AdminLogin() {
    const [sname, setSName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost/api/adminlogin.php', {
        sname: sname,
        email: email,
        password: password
      });

      console.log(response.data);
      if (response.data.phpresult==="ok"){
        navigate('/admin');
      }
      else {
        alert("Wrong input");
      }
      // Redirect the user to the dashboard page
    } catch (error) {
      console.log(error);
    }
  };
    return (
        <>
            <body class="adbodmin">
                <div class="container_minad">
                    <div class="screen_admin_mine">
                        <div class="screen__content">
                            <form class="login_admin_box" onSubmit={handleSubmit}> 
                                <h3>Admin Panel</h3>
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    <input type="text" name="aname" class="login__input" placeholder="Admin Name" autoComplete="off" required value={sname}  onChange={(event) => setSName(event.target.value)}/>
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-envelope"></i>
                                    <input type="email" name="amail" class="login__input" placeholder="Email" autoComplete="off" required value={email}  onChange={(event) => setEmail(event.target.value)}/>
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-lock"></i>
                                    <input type="password" name="apassword" class="login__input" placeholder="Password" autoComplete="off" required value={password}  onChange={(event) => setPassword(event.target.value)}/>
                                </div>
                                <button type="submit" name="subadnum" value="Subad" class="button login__submit">
                                    <span class="button__text">Log In Now</span>
                                    <i class="button__icon fas fa-chevron-right"></i>
                                </button>
                            </form>
                        </div>
                        <div class="screen__background">
                            <span class="screen__background__shape screen__background__shape4"></span>
                            <span class="screen__background__shape screen__background__shape3"></span>
                            <span class="screen__background__shape screen__background__shape2"></span>
                            <span class="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}
