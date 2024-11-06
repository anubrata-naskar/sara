import React, { useState, useEffect} from 'react'
import axios from "axios"
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import "../cssfile/regstyle.css"


export default function TeacherReg() {
  const [inputs, setInputs]=useState({})
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]:value}))
      
  }
  const handleSubmit = (event) => {
      event.preventDefault();

      axios.post('http://localhost/api/teacherRegP.php', inputs)
      axios.get('/api/teacherRegP.php')
      .then(response => {
        // Parse the response data and update state
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
      console.log(inputs)
      
  }
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(true);
  };


    return (    
      <body class="body_reg">
       {showContent && (
        <div>
          <h1>Successfull!!! Please Login</h1>
        </div>
      )}
      <div class="container_reg">
      <div class="title_reg">Registration Form</div>
      <div class="content_reg">
	      <form onSubmit={handleSubmit} class="form_reg">
          <div class="user-details_reg">

            <div class="input-box_reg">
            <span class="details_reg">Full Name</span>
            <input type="text" class="field_reg" name="name" placeholder="Enter Your Name" onChange={handleChange}/>
            </div>

            <div class="input-box_reg">
            <span class="details_reg">Age</span>
            <input type="number" class="field_reg" name="age" placeholder="Enter Your Age" onChange={handleChange}/>
            </div>

            <div class="input-box_reg">
            <span class="details_reg">Phone No.</span>
            <input type="number" class="field_reg" name="phone" placeholder="Enter Your Phone No" onChange={handleChange}/>
            </div>

            <div class="input-box_reg">
            <span class="details_reg">Qualificatipon</span>
            <input type="text" class="field_reg" name="qua" placeholder="Enter Your Qualtification" onChange={handleChange}/>
            </div>

            <div class="input-box_reg">
            <span class="details_reg">Current Status</span>
            <input type="text" class="field_reg" name="cstatus" placeholder="Enter Your Current Status" onChange={handleChange}/>
            </div>

            <div class="input-box_reg">
            <span class="details_reg">Past status</span>
            <input type="text" class="field_reg" name="pstatus" placeholder="Enter Your Past Status" onChange={handleChange}/>
            </div>

            <div class="input-box_reg">
            <span class="details_reg">Address</span>
            <input type="text" class="field_reg" name="address" placeholder="Enter Your Address" onChange={handleChange}/>
            </div>

            <div class="input-box_reg">
            <span class="details_reg">Email</span>
            <input type="email" class="field_reg" name="email" placeholder="Enter Your Email" onChange={handleChange}/>
            </div>

            <div class="input-box_reg">
            <span class="details_reg">Password</span>
            <input type="password" class="field_reg" name="password" placeholder="Enter A Password" onChange={handleChange}/>
            </div>

            <div class="input-box_reg">
            <span class="details_reg">About</span>
            <textarea placeholder="Say something about you....." class="field_reg" name="about" onChange={handleChange}/>
            </div>
          </div>

            <div class="button_reg">
            <input type="submit" value="Register" class="btn_reg"  onClick={handleClick}/>
            </div>

        </form>
      </div>
    </div>
</body>
    )
  }

