import React, { useState, useEffect } from 'react'
import axios from "axios"
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import "../cssfile/teacher_dashboard.css"
import "../cssfile/add_new_course.css"
import "../cssfile/edit_course.css"
import "../cssfile/payments.css"
import "../cssfile/success.css"
import "../cssfile/query.css"
import TeacherDashHome from "./TeacherDashHome"
import logo from "./logo.jpg";
// import teacher_dashboard_handel from "./teacher_dashboard_handel"

function generateRandomNumber() {
    let randomNum = '';
    for (let i = 0; i < 10; i++) {
      randomNum += Math.floor(Math.random() * 10);
    }
    return randomNum;
  }

export default function (props) {
    const [email, setEmail] = useState(props.email);
    const [crse_name, setCrse_name] = useState("");
    const [exp, setExp] = useState("");
    const [crse_for, setCrse_for] = useState("");
    const [crse_dura, setCrse_dura] = useState("");
    const [crse_start, setCrse_start] = useState("");
    const [fees, setFees] = useState("");
    const [location, setLocation] = useState("");
    const [crse_about, setCrse_about] = useState("");
    const [rando, setRando] = useState("");
    let randomNum = '';

    const [dd, setDd] = useState("");
    const [mm, setMm] = useState("");
    const [yy, setYy] = useState("");
    const [card_name, setCard_name] = useState("");
    const [card_number, setCard_number] = useState("");
    const [cvc, setCvc] = useState("");
    const [exp_m, setExp_m] = useState("");
    const [exp_y, setExp_y] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
        for (let i = 0; i < 10; i++) {
            randomNum += Math.floor(Math.random() * 10);
          }
          setRando(randomNum);
        const formData = new FormData();
        formData.append("email", email);
        formData.append("crse_name", crse_name);
        formData.append("exp", exp);
        formData.append("crse_for", crse_for);
        formData.append("crse_dura", crse_dura);
        formData.append("crse_start", crse_start);
        formData.append("fees", fees);
        formData.append("location", location);
        formData.append("crse_about", crse_about);
        formData.append("trans_id", randomNum);

        try {
            await axios.post("http://localhost/api/teacher_new_crseP.php", formData);
            setDisplayedContent('payment');
        } catch (error) {
            console.error(error);
            alert("Error uploading video.");
        }
    };

    const handleSubmit2 = async (event) => {
        event.preventDefault();

        const formData2 = new FormData();
        formData2.append("dd", dd);
        formData2.append("mm", mm);
        formData2.append("yy", yy);
        formData2.append("card_name", card_name);
        formData2.append("card_number", card_number);
        formData2.append("cvc", cvc);
        formData2.append("exp_m", exp_m);
        formData2.append("exp_y", exp_y);
        formData2.append("trans_id", rando);

        try {
            await axios.post("http://localhost/api/payment.php", formData2);
            setDisplayedContent('successfull');
        } catch (error) {
            console.error(error);
            alert("Error uploading video.");
        }
        setDisplayedContent('successfull')
    };

    const [searchValue, setSearchValue] = useState(props.email);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/api/teacherPrevCourseP.php?search=${searchValue}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, [searchValue]);

    const [data12, setData12] = useState([]);
    useEffect(() => {
        fetch(`http://localhost/api/reviewT.php?search=${searchValue}`)
            .then((response) => response.json())
            .then((data) => setData12(data))
            .catch((error) => console.log(error));
    }, [searchValue]);

    const [data13, setData13] = useState([]);
    useEffect(() => {
        fetch(`http://localhost/api/interestT.php?search=${searchValue}`)
            .then((response) => response.json())
            .then((data) => setData13(data))
            .catch((error) => console.log(error));
    }, [searchValue]);

    const handleDeleteClick = (id) => {
        console.log(id)
        fetch(`http://localhost/api/teacherPrevCourseP.php?deleteId=${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
        alert("successfully deleted");
    };
    const [selectedTask, setSelectedTask] = useState("Task 1");
    const [displayedContent, setDisplayedContent] = useState("");
    
    switch (displayedContent) {
        case 'payment':
            return (
                <body class="payment_body">
                <div class="wrap_upppp">
                    <h2>Payment Form</h2>
                    <form onSubmit={handleSubmit2}>
                        <div class="input_group_payment">
                            <div class="input_box_pay_lat">
                                <h4>Date Of Birth</h4>
                                <input type="text" placeholder="DD" name="dd" required class="dob" autoComplete="off" onChange={(e) => setDd(e.target.value)}/>
                                <input type="text" placeholder="MM" name="mm" required class="dob" autoComplete="off" onChange={(e) => setMm(e.target.value)}/>
                                <input type="text" placeholder="YYYY" name="yy" required class="dob" autoComplete="off" onChange={(e) => setYy(e.target.value)}/>
                            </div>
                        </div>

                        <div class="input_group_payment">
                            <div class="input_box_pay_lat">
                                <h4>Credit/Debit Card Details</h4>
                            </div>
                        </div>
                        <div class="input_box_pay_lat">
                            <input type="text" placeholder="Name of Card holder" name="cardname" required class="name" autoComplete="off" onChange={(e) => setCard_name(e.target.value)}/>
                            <i class="fa fa-user icon"></i>
                        </div>
                        <div class="input_group_payment">
                            <div class="input_box_pay_lat">
                                <input type="text" class="name" placeholder="Card Number XXXX-XXXX-XXXX-XXXX" name="cardno" required autoComplete="off" onChange={(e) => setCard_number(e.target.value)}/>
                                <i class="fa fa-credit-card icon"></i>
                            </div>
                        </div>
                        <div class="input_group_payment">
                            <div class="input_box_pay_lat">
                                <input type="number" class="name" placeholder="Card CVC/CVV XXX" name="cardcv" required autoComplete="off" onChange={(e) => setCvc(e.target.value)}/>
                                <i class="fa fa-user icon"></i>
                            </div>
                        </div>
                        <div class="input_group_payment">
                            <div class="input_box_pay_lat">
                                <div class="input_box_pay_lat">
                                    <input type="number" placeholder="Exp Month" name="cardm" required class="name" autoComplete="off" onChange={(e) => setExp_m(e.target.value)}/>
                                    <i class="fa fa-calendar icon" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="input_box_pay_lat">
                                <input type="number" placeholder="Exp Year" name="cardy" required class="name" autoComplete="off" onChange={(e) => setExp_y(e.target.value)}/>
                                <i class="fa fa-calendar-o icon" aria-hidden="true"></i>
                            </div>
                        </div>

                        <div class="input_group_payment">
                            <div class="input_box_pay_lat">
                                {/* <input class="pay_btn_teacher" type="submit" value="Submit" placeholder="PAYy"/> */}
                                <input class="sub_pay_m" type="submit" value="Pay 20/-" />
                            </div>
                        </div>
                    </form>
                </div>
                </body>
            );
        case 'successfull':
            return (
                <body class="succ_bod">
                    <div class="candy">
                        <div class="candy2">
                            <i><span>&#10004;</span></i>
                        </div>
                        <h1>Success</h1>
                        <p>Your Payment was successful<br />Previous Course Details will get updated shortly</p><br /><br />
                        <p><button onClick={() => setDisplayedContent()} class="bunty">Dashboard</button></p>
                    </div>
                </body>
            );
        default:
            return (
                <html>
                    <body>
                        <nav>
                            <div class="logo-name">
                                <div class="logo-image">
                                    <img src={logo} alt="not found" />
                                </div>

                                <span class="logo_name">TutiPie</span>
                            </div>

                            <div class="menu-items">
                                <ul class="nav-links">
                                    <li>
                                        <button onClick={() => setSelectedTask('Task 1')}><i class="fa fa-home icon" />
                                            <span class="link-name">    Dashboard</span></button>
                                    </li>
                                    <li>
                                        <button onClick={() => setSelectedTask('Task 6')}><i class="fa fa-edit icon" />
                                            <span class="link-name">    Edit Profile</span></button>
                                    </li>
                                    <li>
                                        <button onClick={() => setSelectedTask('Task 2')}><i class="fa-solid fa-book-open-reader icon" />
                                            <span class="link-name">    Add a New Course</span></button>
                                    </li>
                                    <li>
                                        <button onClick={() => setSelectedTask('Task 3')}><i class="fa fa-check icon"></i>
                                            <span class="link-name">    Provided Courses  </span></button>

                                    </li>
                                    <li>
                                        <button onClick={() => setSelectedTask('Task 7')}><i class="fa fa-comment icon"></i>
                                            <span class="link-name">    Learner's Reviews  </span></button>

                                    </li>
                                    <li>
                                        <button onClick={() => setSelectedTask('Task 8')}><i class="fa fa-thumbs-up icon"></i>
                                            <span class="link-name">  Interest Students  </span></button>

                                    </li>
                                </ul>


                                <ul class="logout-mode">
                                    <li><a href="#">
                                        <Link to="C:\Users\Ankan\Documents\React\sara\Tutipie\index.html">
                                            <i class="uil uil-signout"></i>
                                            <span class="link-name">Logout</span></Link>
                                    </a></li>

                                </ul>
                            </div>
                        </nav>

                        {selectedTask === 'Task 1' && <div>
                            <section class="dashboard">
                                <div class="top">
                                    <i className="uil uil-bars sidebar-toggle"></i>
                                    <div class="teacher_hello">Welcome {props.userName}</div>
                                    <div class="container2_2" >
                                        <input type="text" name="search" placeholder="Search here..." class="input" autoComplete="off" />
                                        <button class="btn2_2  " type="submit">
                                            <i class="fas fa-search" />Search
                                        </button>
                                    </div>
                                </div>

                                <div class="dash-content">
                                    <div class="overview">
                                        <div class="title">
                                            <span class="text">Hi Teacher <br />
                                                Have a Good Day..!!</span><br />
                                        </div>
                                    </div>
                                    <p class="quote_dash_teacher">
                                        “The task of the excellent teacher is to <br /> stimulate ‘apparently ordinary’ people to unusual effort. 
                                        <br />The tough problem is not in identifying winners:<br /> it is in making winners out of ordinary people.” <br /><br />-- K. Patricia Cross
                                    </p>
                                </div>
                            </section>
                        </div>}

                        {selectedTask === 'Task 2' && <div> <section className="dashboard">
                            <div class="top">
                                <i className="uil uil-bars sidebar-toggle"></i>
                                <div class="teacher_hello">Welcome {props.userName}</div>
                                <div class="container2_2" >
                                    <input type="text" name="search" placeholder="Search here..." class="input" autoComplete="off" />
                                    <button class="btn2_2  " type="submit">
                                        <i class="fas fa-search" />Search
                                    </button>
                                </div>

                            </div>

                            <div className="dash-content">
                                <div className="overview">


                                    <div class="title_edit_admin">Course Details</div>
                                    <form class="container_form_edit" onSubmit={handleSubmit} >
                                        <div class="user-details">

                                            <div class="input-box_edit">
                                                <span class="details">Course Name:</span>
                                                <input type="text" autoComplete="off" placeholder="Enter course name" onChange={(e) => setCrse_name(e.target.value)} />
                                            </div>

                                            <div class="input-box_edit">
                                                <span class="details">Experience:</span>
                                                <input type="number" autoComplete="off" required placeholder="Experience(in years)" value={exp} onChange={(e) => setExp(e.target.value)} />
                                            </div>

                                            <div class="input-box_edit">
                                                <span class="details">Course For:</span>
                                                <input type="text" autoComplete="off" required placeholder="Ex-Computer Science" value={crse_for} onChange={(e) => setCrse_for(e.target.value)} />
                                            </div>

                                            <div class="input-box_edit">
                                                <span class="details">Course Duration:</span>
                                                <input type="text" autoComplete="off" required placeholder="Enter duration of course" value={crse_dura} onChange={(e) => setCrse_dura(e.target.value)} />
                                            </div>

                                            <div class="input-box_edit">
                                                <span class="details">Course Start From:</span>
                                                <input type="text" autoComplete="off" required placeholder="Ex - April" value={crse_start} onChange={(e) => setCrse_start(e.target.value)} />
                                            </div>

                                            <div class="input-box_edit">
                                                <span class="details">Fees:</span>
                                                <input type="number" autoComplete="off" required placeholder="Enter fees" value={fees} onChange={(e) => setFees(e.target.value)} />
                                            </div>

                                            <div class="input-box_edit">
                                                <span class="details">Location:</span>
                                                <input type="text" autoComplete="off" required placeholder="Enter your location" value={location} onChange={(e) => setLocation(e.target.value)} />
                                            </div>

                                            <div class="input-box_edit">
                                                <span class="details">About Course:</span>
                                                <textarea type="text" autoComplete="off" required placeholder="About your course" value={crse_about} onChange={(e) => setCrse_about(e.target.value)} />
                                            </div>

                                        </div>

                                        <div class="button_edit">
                                            <input type="submit" value="Submit" />
                                        </div>
                                    </form>                        </div>
                            </div>
                        </section></div>}

                        {selectedTask === 'Task 3' && <div><section class="dashboard">
                            <div class="top">
                                <i className="uil uil-bars sidebar-toggle"></i>
                                <div class="teacher_hello">Welcome {props.userName}</div>
                                <div class="container2_2" >
                                    <input type="text" name="search" placeholder="Search here..." class="input" autoComplete="off" />
                                    <button class="btn2_2  " type="submit">
                                        <i class="fas fa-search" />Search
                                    </button>
                                </div>

                            </div>
                            <div class="dash-content">
                                <div class="overview">
                                    <div class="dash-content">
                                        <div class="overview">

                                            <div class="activity">
                                                <div class="title">
                                                    <span class="text">Previously Added Course</span>
                                                </div>

                                                <div class="activity-data">
                                                    <table class="table table-striped table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Course Name</th>
                                                                <th scope="col">Course start</th>
                                                                <th scope="col">Course fees</th>
                                                                <th scope="col">Delete Course</th>
                                                                <th scope="col">Demo Videos</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data.map((row) => (
                                                                <tr key={row.crse_id}>
                                                                    <td scope="row">{row.crse_id}</td>
                                                                    <td>{row.crse_name}</td>
                                                                    <td>{row.crse_start}</td>
                                                                    <td>{row.fees}</td>
                                                                    <td>
                                                                        {/* <button onClick={() => handleDeleteClick(row.crse_id)}>
                                                                </button> */}
                                                                        <i class="fa-solid fa-trash fontp" size="xl" style={{ color: "#ff0a0a", }} onClick={() => handleDeleteClick(row.crse_id)} />

                                                                    </td>
                                                                    <td>
                                                                        <form action="http://localhost/api/upload.php" method="post" enctype="multipart/form-data">
                                                                            <input type="file" name="file" /><br />
                                                                            <input type="hidden" name="number2" value={row.crse_id} />
                                                                            <input type="submit" value="Upload file" name="submit" />
                                                                        </form>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section></div>}
                        {/* {selectedTask === 'Task 4' && <body class="pay_bod">
                    <div class="top">
                        <i className="uil uil-bars sidebar-toggle"></i>
                        <div class="teacher_hello">Welcome {props.userName}</div>
                    </div>
                    <div class="wrap_upppp">
                        <h2>Payment Form</h2>
                        <form action="back.php" method="post">
                            <h4>Account</h4>
                            <div class="input_group_payment">
                                <div class="input_box_pay_lat">
                                    <input type="text" placeholder="Teacher Name" name="teacher" required class="name" />
                                    <i class="fa fa-user icon"></i>
                                </div>
                                <div class="input_box_pay_lat">
                                    <input type="text" placeholder="Course Name" name="course" required class="name" />
                                    <i class="fa fa-credit-card icon"></i>
                                </div>
                            </div>
                            <div class="input_group_payment">
                                <div class="input_box_pay_lat">
                                    <input type="email" placeholder="Email Address" name="email" required class="name" />
                                    <i class="fa fa-envelope icon"></i>
                                </div>
                            </div>
                            <div class="input_group_payment">
                                <div class="input_box_pay_lat">
                                    <input type="text" placeholder="Address Pin Code" name="pin" required class="name" />
                                    <i class="fa fa-institution icon"></i>
                                </div>
                            </div>

                            <div class="input_group_payment">
                                <div class="input_box_pay_lat">
                                    <h4>Date Of Birth</h4>
                                    <input type="text" placeholder="DD" name="dd" required class="dob" />
                                    <input type="text" placeholder="MM" name="mm" required class="dob" />
                                    <input type="text" placeholder="YYYY" name="yy" required class="dob" />
                                </div>
                            </div>

                            <div class="input_group_payment">
                                <div class="input_box_pay_lat">
                                    <h4>Credit/Debit Card Details</h4>
                                </div>
                            </div>
                            <div class="input_box_pay_lat">
                                <input type="text" placeholder="Name on Card" name="cardname" required class="name" />
                                <i class="fa fa-user icon"></i>
                            </div>
                            <div class="input_group_payment">
                                <div class="input_box_pay_lat">
                                    <input type="text" class="name" placeholder="Card Number XXXX-XXXX-XXXX-XXXX" name="cardno" required />
                                    <i class="fa fa-credit-card icon"></i>
                                </div>
                            </div>
                            <div class="input_group_payment">
                                <div class="input_box_pay_lat">
                                    <input type="number" class="name" placeholder="Card CVC/CVV XXX" name="cardcv" required />
                                    <i class="fa fa-user icon"></i>
                                </div>
                            </div>
                            <div class="input_group_payment">
                                <div class="input_box_pay_lat">
                                    <div class="input_box_pay_lat">
                                        <input type="number" placeholder="Exp Month" name="cardm" required class="name" />
                                        <i class="fa fa-calendar icon" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="input_box_pay_lat">
                                    <input type="number" placeholder="Exp Year" name="cardy" required class="name" />
                                    <i class="fa fa-calendar-o icon" aria-hidden="true"></i>
                                </div>
                            </div>

                            <div class="input_group_payment">
                                <div class="input_box_pay_lat">
                                    <button class="pay_btn_teacher" onClick={() => setSelectedTask('Task 5')} name="sbm" value="Sub">PAY 20/- NOW</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </body>} */}


                        {/* {selectedTask === 'Task 5' && <body class="succ_bod">
                    <div class="candy">
                        <div class="candy2">
                            <i><span>&#10004;</span></i>
                        </div>
                        <h1>Success</h1>
                        <p>Your Payment was successful<br />Previous Course Details will get updated shortly</p><br /><br />
                        <p><button onClick={() => setSelectedTask('Task 3')} class="bunty">Dashboard</button></p>
                    </div>
                </body>} */}

                        {/* <section class="dashboard">
        <div class="top">
            <div>Hello {props.userName}</div>
            <div class="search-box">
                <i class="uil uil-search"></i>
                <input type="text" placeholder="Search here..."/>
            </div>
            
        </div>

        <div class="dash-content">
            <div class="overview">
                <div class="title">
                    <span class="text">Hi Teacher <br/>
                     Have a Good Day..!!</span><br/>
                </div>
			</div>
        </div>
    </section>
    <script type="module" src="C:\Users\anubrata\Desktop\react\sara\src\components\teacher_dashboard_handel.js"></script> */}
                        {selectedTask === 'Task 6' && <body class="pay_bod">
                            <div class="top">
                                <i className="uil uil-bars sidebar-toggle"></i>
                                <div class="teacher_hello">Welcome {props.userName}</div>
                            </div>
                            <div class="edit">
                                <div class="top">
                                    <i className="uil uil-bars sidebar-toggle"></i>
                                    <div class="teacher_hello">Welcome {props.userName}</div>
                                </div>
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
                                                            <h5 class="user-name">Dr. Akash Sen</h5>
                                                            <h6 class="user-email">akash@gmail.com</h6>
                                                        </div>
                                                        <div class="about">
                                                            <h5 class="about_profile">About</h5>
                                                            <p class="about_profile_write">I'm Akash. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.Now i want to teach you.</p>
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
                                                                <label for="Street">Qualification</label>
                                                                <input type="name" class="form-control" id="Street" placeholder="Qualification" />
                                                            </div>
                                                        </div><br /><br />
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                            <div class="form-group">
                                                                <label for="ciTy">Current Status</label>
                                                                <input type="name" class="form-control" id="ciTy" placeholder="Current Status" />
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                            <div class="form-group">
                                                                <label for="sTate">Past Status</label>
                                                                <input type="text" class="form-control" id="sTate" placeholder="Past Status" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row gutters">
                                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <h6 class="mt-3 mb-2 text-primary">Address</h6>
                                                        </div>
                                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div class="form-group_address">
                                                                <label for="Street">Address</label>
                                                                <input type="name" class="form-control_address" id="Street" placeholder="Enter Your Address" />
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
                            </div></body>}


                            {selectedTask === 'Task 7' && <div><section class="dashboard">
						<div class="top">
							<i class="uil uil-bars sidebar-toggle"></i>
							<div class="admin_hello">Welcome {props.userName}</div>
							<div class="container2_3" >
								<input type="text" name="search" placeholder="Search here..." class="input" autoComplete="off" />
								<button class="btn2_3  " type="submit">
									<i class="fas fa-search" />Search
								</button>
							</div>

						</div>

						<div class="dash-content">
							<div class="overview">
								<div class="dash-content">
									<div class="overview">

										<div class="activity">
											<div class="title_query">
												<span class="text_query">Reviews Section</span>
											</div>
										</div>
										<table class="table-fill_honey">
											<thead>
												<tr>
													<th class="text-left_modi">Email</th>
													<th class="text-left_modi">Reviews</th>
                                                    <th class="text-left_modi">Rating</th>
												</tr>
											</thead>
											<tbody class="table-hover">
                                            {data12.map((row) => (
												<tr class="table_query_row" key={row.semail}>
													<td class="text-left_modi">{row.semail}</td>
													<td class="text-left_modi">{row.review}</td>
                                                    <td class="text-left_modi">{row.rating}</td>
												</tr>))}
											</tbody>
										</table> 
									</div>
								</div>
							</div>
						</div>
					</section></div>}

                    {selectedTask === 'Task 8' && <div><section class="dashboard">
						<div class="top">
							<i class="uil uil-bars sidebar-toggle"></i>
							<div class="admin_hello">Welcome {props.userName}</div>
							<div class="container2_3" >
								<input type="text" name="search" placeholder="Search here..." class="input" autoComplete="off" />
								<button class="btn2_3  " type="submit">
									<i class="fas fa-search" />Search
								</button>
							</div>

						</div>

						<div class="dash-content">
							<div class="overview">
								<div class="dash-content">
									<div class="overview">

										<div class="activity">
											<div class="title_query">
												<span class="text_query">Interested Students</span>
											</div>
										</div>
										<table class="table-fill_honey">
											<thead>
												<tr>
													<th class="text-left_modi">Course ID</th>
													<th class="text-left_modi">Course Name</th>
                                                    <th class="text-left_modi">Contact</th>
												</tr>
											</thead>
											<tbody class="table-hover">
                                            {data13.map((row) => (
												<tr class="table_query_row" key={row.semail}>
													<td class="text-left_modi">{row.crse_id}</td>
													<td class="text-left_modi">{row.crse_name}</td>
                                                    <td class="text-left_modi">{row.email}</td>
												</tr>))}
											</tbody>
										</table> 
									</div>
								</div>
							</div>
						</div>
					</section></div>}

                    </body>
                </html>
            );
    }
}

// navbar - component
// put links there
// 1. home - page componenet
// 2. contact - page componenet
// 3. about - page componenet

// make a shared component
// import navcomponenet in shared component
// <outlet/>
// <Route path='/' element={<sharedcomponent>}>
//<Route index element={<Home>}>
//<Route path='contat' element={<Contat>}>
//<Route path='about' element={<About>}>
// </Route>