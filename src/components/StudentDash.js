import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa";
import axios from "axios"
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import "../cssfile/studentdash.css"
import StudentShowCourse from "./StudentShowCourse"
import { Modal, ModalHeader } from "reactstrap";
import ViewDetails from './ViewDetails';

function yellowStars(num) {
  let stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(<i className="fa fa-star" style={{ color: 'orange' }} />);
  }
  return stars;
}

export default function StudentDash(props) {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [displayedContent, setDisplayedContent] = useState(null);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
    setQuery(event.target.value);
    // axios.get(`http://localhost/api/searchInsP.php?q=${event.target.value}`)
    //   .then(response => {
    //     setResults(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    fetch(`http://localhost/api/searchInsP.php?search=${event.target.value}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error(error));

    console.log(results);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
    fetch(`http://localhost/api/courseSearch.php?search=${search}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));

    setDisplayedContent("ok")
  }

  const [openModal, setOpenModal] = useState(false);
  const [data2, setData2] = useState([]);
  const modalControl = (ee) => {
    console.log(ee);
    fetch(`http://localhost/api/selfreview.php?search=${ee}`)
      .then(response => response.json())
      .then(data => setData2(data))
      .catch(error => console.error(error));

    setOpenModal(true)
  }
  const [openModal1, setOpenModal1] = useState(false);


  switch (displayedContent) {
    case 'ok':
      return (
        <div>
          <p><StudentShowCourse data={data} email={props.email} /> </p>
        </div>
      );


    default:
      return (
        <>
          <Modal size='lg' isOpen={openModal} toggle={() => setOpenModal(!openModal)}>
            <div class="modal_header">
            <ModalHeader toggle={() => setOpenModal(!openModal)}>
              <p><b><h3 className="head1 h3_edit">Review</h3></b></p>
            </ModalHeader>
            </div>
            <div className="modalbackground">
              <section class="main">
                <div class="full-boxer">
                  {data2.map((row) => (
                    <div class="comment-box" key={row.temail}>
                      <div class="box-top">
                        <div class="Name">
                          {/* <strong><Rating value={} /></strong> */}
                          {/* <strong>({row.rating}*★)</strong> */}
                          <strong>  {yellowStars(row.rating)}</strong>
                         {/* </div></div> <strong className={ratingValue <= rating ? "filled" : ""} handleClick(ratingValue)}></strong> */}
                          <span>{row.temail}</span>
                        </div>
                      </div>
                      <div class="comment">
                        <p>{row.review}</p>
                      </div>
                    </div>))}
                </div>
              </section>
            </div>
          </Modal>
          <Modal size='lg' isOpen={openModal1} toggle={() => setOpenModal1(!openModal1)}>
          <div class="modal_header">
            <ModalHeader toggle={() => setOpenModal1(!openModal1)}>
              <div className="head1"><p><b><h3 class="h3_edit">Edit Profile</h3></b></p> </div>
            </ModalHeader>
            </div>
            <div class="modal_edit_prof">
            <body>
              <div class="edit">
                <div class="container">
                  <div class="row gutters">
                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                      <div class="card223 h-100">
                        <div class="card-body">
                          <div class="account-settings">
                            <div class="user-profile">
                              <div class="user-avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="not found" />
                              </div>
                              <h5 class="user-name">Rishi Banerjee</h5>
                              <h6 class="user-email">rishi@gmail.com</h6>
                            </div>
      
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                      <div class="card223 h-100">
                        <div class="card-body">
                          <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h6 class="mb-2 text-primary">Personal Details</h6>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div class="form-group">
                                <label for="fullName">Full Name</label>
                                <input type="text" class="form-control" id="fullName" placeholder="Enter full name" />
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div class="form-group">
                                <label for="eMail">Email</label>
                                <input type="email" class="form-control" id="eMail" placeholder="Enter email ID" />
                              </div>
                            </div>
                            <br />
                            <br />
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" class="form-control" id="phone" placeholder="Enter phone number" />
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div class="form-group">
                                <label for="website">Age</label>
                                <input type="url" class="form-control" id="website" placeholder="Age" />
                              </div>
                            </div>
                          </div>
                          <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h6 class="mt-3 mb-2 text-primary">Academic</h6>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div class="form-group">
                                <label for="Street">Profession</label>
                                <input type="name" class="form-control" id="Street" placeholder="Profession" />
                              </div>
                            </div><br /><br />
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div class="form-group">
                                <label for="ciTy">School</label>
                                <input type="name" class="form-control" id="ciTy" placeholder="School" />
                              </div>
                            </div>
                          </div>
                          <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h6 class="mt-3 mb-2 text-primary">Password</h6>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div class="form-group">
                                <label for="Street">Current Password</label>
                                <input type="name" class="form-control" id="Street" placeholder="Enter Password" />
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div class="form-group">
                                <label for="Street">Confirm Password</label>
                                <input type="name" class="form-control" id="Street" placeholder="Confirm Password" />
                              </div>
                            </div>

                          </div>
                          <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <div class="text-right">
                                <button type="button" id="submit" name="submit" class="btn-secondary">Cancel</button>
                              
                                <button type="button" id="submit" name="submit" class="btn-primary">Update</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></body>
              </div>
          </Modal>
          <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <span class="navbar-text">
                <h3 class="nav_std_dash">TutiPie</h3>
              </span>
              <span class="navbar-text">
                <h3 class="nav_std_dash_txt">Welcome Learner</h3>
              </span>
              <p class="hello_nav">
                <button onClick={() => modalControl(props.email)} class="fcc-btn">View Reviews</button>
                <button onClick={() => setOpenModal1(true)} class="fcc-btn">Edit Profile</button>
                <a class="fcc-btn" href="C:/Users/Ankan/Documents/React/sara/src/Tutipie/index.html" role="button">Log Out</a></p>
            </div>
          </nav>

          <div class="body2">
            <form onSubmit={handleSubmit}>
              <div class="fs-6"><h1 class="h2_sdash">Hello <br></br> {props.userName}</h1></div>
              <p class="sdash_p">Please Search The Courses:</p>
              <div class="container2" >
                <input type="text" name="search" placeholder="Search course..." class="input" autoComplete="off" required value={search} onChange={handleChange} />
                <button class="btn2  " type="submit">
                  <i class="fas fa-search" />
                </button>
                <ul className="search-results">
                  {results.map((result, index) => (
                    <li key={index} class="search_list">{result.crse_name}</li>
                  ))}
                </ul>
              </div>
            </form>
          </div>


          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>

        </>
      );
    // }
  }
}
