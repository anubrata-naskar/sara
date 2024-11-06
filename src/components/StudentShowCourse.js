import React, { useState, useEffect } from 'react'
import "../cssfile/showcourse.css"
import axios from "axios"
import {
  BrowserRouter as Router,
  Link, useLocation
} from "react-router-dom";
import ViewDetails from "./ViewDetails"
import { FaStar } from "react-icons/fa";
export default function StudentShowCourse(props) {
  const location = useLocation()
  const [displayedContent, setDisplayedContent] = useState(null);
  const [crse_id, setCrse_id] = useState(null);
  const [rating, setRating] = useState([]);
  const [email, setEmail] = useState(null);
  const [search, setSearch] = useState(null);
  const setSelectedTask = (crse_id, email) => {
    setCrse_id(crse_id);
    setEmail(email);
    setDisplayedContent("ok");
  };
  const [viewState, setViewState] = useState("search")


  // const avgRating = (crse_id) => {
  //   // try {
  //   //   const response =  axios.post('http://localhost/api/avgrating.php', {
  //   //     crse_id: crse_id,
  //   //   });

  //   //   setRating(response.data.phpresult);
  //   //   console.log(response.data);
  //   //   // Redirect the user to the dashboard page
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  //   axios.post('http://localhost/api/avgrating.php', { crse_id })
  //     .then(response => {
  //       console.log(response.data);
  //       setRating(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  const StarIcon = ({ filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "#FFC107" : "none"} stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
      <polygon points="12 2 15.09 8.19 22 9.24 17 14.06 18.18 21.01 12 17.77 5.82 21.01 7 14.06 2 9.24 8.91 8.19 12 2"></polygon>
    </svg>
  );

  const Rating = ({ value }) => (
    <div>
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} filled={i < value} />
      ))}
      <span>({value})</span>
    </div>
  );

  return (
    <>
    <body class="std_show_course_body">
      {viewState === "search" ?
        <>
          <div class="back3">
            <nav class="navbar bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand">TutiPie</a>
                <div class="container2_1" >
                    <input type="text" name="search" placeholder="Search here..." class="input" autoComplete="off" required value={search}/>
                      <button class="btn2_1  " type="submit">
                          <i class="fas fa-search" />Search
                      </button>
                </div>
              </div>
            </nav>
            <div class="ag-format-container">
              <div class="ag-courses_box">

                {props.data.map((row) => (
                  <div class="ag-courses_item" key={row.crse_id} >
                    <div class="ag-courses-item_link">
                      {/* <div class="ag-courses-item_bg">{avgRating(row.crse_id)}</div> */}

                      <div class="ag-courses-item_title">
                        <div class="crse_algerian">{row.crse_name}</div><div class="fees_crse">Fees:{row.fees}</div>
                      </div>

                      <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                         {row.crse_start}<br />
                          {/* <button onClick={() => setSelectedTask(row.crse_id, row.email)}>more</button> */}
                          <button onClick={() => {
                            setViewState(row.crse_id)
                          }} ><h6><Link>view details</Link></h6></button>
                        </span>
                      </div>
                    </div>
                  </div>))}
              </div>
            </div> 

          </div>
        </>
        : <ViewDetails viewState={viewState} setViewState={setViewState} email={props.email}/>
      }
      </body>
    </>
  )


}
