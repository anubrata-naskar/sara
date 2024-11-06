import React from 'react'

import "../cssfile/student_review.css"
export default function StudentReview() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">TutiPie</a>
            <h3 class="nav_std_dash_txt_rev">Review Section</h3>
          <p class="hello_nav">  
                <a class="fcc-btn" href="#" role="button"><i class="fa-sharp fa-solid fa-angles-left" />Go Back</a>
          </p>
        </div> 
      </nav>
      <body class="body_std_rev">
        <section class="main">
          <div class="full-boxer">
            <div class="comment-box">
              <div class="box-top">
                <div class="Name">
                  <strong>Ankan Samanta</strong>
                  <span>ankan@gmail.com</span>
                </div>
              </div>
              <div class="comment">
                <p>Hello i am ankan..!</p>
              </div>
            </div>

            <div class="comment-box">
              <div class="box-top">
                <div class="Name">
                  <strong>Anubrata Naskar</strong>
                  <span>kesto@gmail.com</span>
                </div>
              </div>
              <div class="comment">
                <p>Hi i am kesto, nam to suna hi hoga..!</p>
              </div>
            </div>

            <div class="comment-box">
              <div class="box-top">
                <div class="Name">
                  <strong>Rahul Das</strong>
                  <span>rahul@gmail.com</span>
                </div>
              </div>
              <div class="comment">
                <p>Biyebari kemon laglo..!</p>
              </div>
            </div>

            <div class="comment-box">
              <div class="box-top">
                <div class="Name">
                  <strong>Sovan Naskar</strong>
                  <span>sovan@gmail.com</span>
                </div>
              </div>
              <div class="comment">
                <p> biriyani is lobh..!</p>
              </div>
            </div>


          </div>
        </section>

      </body>
    </>
  )
}


const style1 = {
  button: {
      border: "1px solid #a9a9a9",
      borderRadius: 8,
      width: 120,
      padding: 4,
  }
};