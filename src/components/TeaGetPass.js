import React, { useState } from 'react';
import axios from "axios"
import { Navigate, useNavigate,Link, createSearchParams } from "react-router-dom";
import "../cssfile/otp.css"

function StuGetPass() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpu, setOtpU] = useState('');
  const [success, setSuccess] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    //console.log(email);
    event.preventDefault();
    fetch('http://localhost/api/otp.php', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then(data => {
        //console.log(data); // false
        setOtp(data.otp);
        setSuccess(data.success);
      })
      .catch((error) => console.error(error));
    // try {
    //   const response = await axios.post('http://localhost/api/otp.php', {
    //     email: email
    //   });

    //   console.log(response.data);
    //   // Redirect the user to the dashboard page
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleSubmit2 = async (event) => {
    if(otpu==otp){
      setPass('true');
      setSuccess('verify');
      navigate({
        pathname: "/changepasst",
        search: createSearchParams({
          email: email
        }).toString()
      });
    }
    else{
      alert("please enter correct otp");
    }
  };
 
  return (
    // <div class="otpcc">
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Email:
    //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //   </label>
    //   <button type="submit">Send OTP</button>
    // </form>
    // </div>
    <body class="body_reg">

      <div class="container_reg">
        <div class="title_reg">Registration Form</div>
        <div class="content_reg">
        {success==='true' ? (
            <form onSubmit={handleSubmit2} class="form_reg">
            <div class="user-details_reg">

              <div class="input-box_reg">
                <span class="details_reg">Enter OTP</span>
                <input type="number" class="field_reg" value={otpu} onChange={(e) => setOtpU(e.target.value)} />
              </div>

              <div class="button_reg">
                <input type="submit" value="Submit" class="btn_reg" />
              </div>
            </div>
          </form>
          )
        //  : success==='verify' ? (
        //     <form onSubmit={handleSubmit2} class="form_reg">
        //     <div class="user-details_reg">

        //       <div class="input-box_reg">
        //         <span class="details_reg">Enter New Password</span>
        //         <input type="number" class="field_reg" value={otpu} onChange={(e) => setOtpU(e.target.value)} />
        //       </div>

        //       <div class="button_reg">
        //         <input type="submit" value="Register" class="btn_reg" />
        //       </div>
        //     </div>
        //   </form>
        //   )
          : (<form onSubmit={handleSubmit} class="form_reg">
            <div class="user-details_reg">

              <div class="input-box_reg">
                <span class="details_reg">Enter Register Email ID</span>
                <input type="email" class="field_reg" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div class="button_reg">
                <input type="submit" value="Register" class="btn_reg" />
              </div>
            </div>
          </form>)}
        </div>
      </div>
    </body>
  );
}

export default StuGetPass;
