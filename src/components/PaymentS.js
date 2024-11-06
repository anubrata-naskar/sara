import React from 'react'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import "../cssfile/payments.css"

export default function PaymentS() {
  return (
    <>
    <body class="succ_bod">
      <div class="candy">
      <div class="candy_succ">
        <i><span>&#10004;</span></i>
      </div>
        <h1>Success</h1> 
        <p>Your Payment was successful<br/>Previous Course Details will get updated shortly</p><br/><br/>
        <p><Link to="/teacherlogin" class="bunty">Dashboard</Link></p>
      </div>
    </body>
    </>
  )
}
