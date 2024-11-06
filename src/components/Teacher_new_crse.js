import React, { useState, useEffect} from 'react'
import axios from "axios"
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import "../cssfile/teacher_dashboard.css"
import "../cssfile/add_new_course.css"
import logo from "./logo.jpeg";


export default function Teacher_new_crse(props) {
    const [email, setEmail] = useState("");
    const [crse_name, setCrse_name] = useState("");
    const [exp, setExp] = useState("");
    const [crse_for, setCrse_for] = useState("");
    const [crse_dura, setCrse_dura] = useState("");
    const [crse_start, setCrse_start] = useState("");
    const [fees, setFees] = useState("");
    const [location, setLocation] = useState("");
  const [crse_about, setCrse_about] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

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

    try {
      await axios.post("http://localhost/api/teacher_new_crseP.php", formData);
      alert("Information added successfully!");
    } catch (error) {
      console.error(error);
      alert("Error uploading video.");
    }
  };
    return (
        <>
            <nav>
                <div className="logo-name">
                    <div className="logo-image">
                        <img src={logo} alt="not found" />
                    </div>

                    <span className="logo_name">TutiPie</span>
                </div>

                <div className="menu-items">
                    <ul className="nav-links">
                        <li>
                            <Link to="/teacherdash"><i className="uil uil-estate"></i>
                                <span className="link-name">Dahsboard</span></Link>
                        </li>
                        <li>
                            <Link to="/teachernew"><i className="uil uil-files-landscapes"></i>
                                <span className="link-name">Add a New Course</span></Link>
                        </li>
                        <li>
                            <Link to="/teacherprev"><i className="uil uil-files-landscapes"></i>
                                <span className="link-name">Already Added Course</span></Link>
                        </li>
                    </ul>

                    <ul className="logout-mode">
                        <li><a href="#">
                            <i className="uil uil-signout"></i>
                            <span className="link-name">Logout</span>
                        </a></li>

                        <li className="mode">
                            <a href="#">
                                <i className="uil uil-moon"></i>
                                <span className="link-name">Dark Mode</span>
                            </a>

                            <div className="mode-toggle">
                                <span className="switch"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <section className="dashboard">
                <div className="top">
                    <i className="uil uil-bars sidebar-toggle"></i>

                    <div className="search-box">
                        <i className="uil uil-search"></i>
                        <input type="text" placeholder="Search here..." />
                    </div>
                </div>

                <div className="dash-content">
                    <div className="overview">

                        
                        <form className="container" onSubmit={handleSubmit}>
                            <div className="contact-box">
                                <div className="left"></div>
                                <div className="right">
                                    <h2>Course Details</h2>
                                    <input type="text" className="field"  autoComplete="off" required placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                                    <input type="text" className="field"  autoComplete="off" required placeholder="Name Of The Course" value={crse_name} onChange={(e) => setCrse_name(e.target.value)}/>

                                    <input type="number" className="field" autoComplete="off" required placeholder="Experience(in years)" value={exp} onChange={(e) => setExp(e.target.value)}/>

                                    <input type="text" className="field" autoComplete="off" required placeholder="Course for...(ex.- BSc Comp Sci sem-4)" value={crse_for} onChange={(e) => setCrse_for(e.target.value)}/>

                                    <input type="text" className="field" autoComplete="off" required placeholder="Course Duration" value={crse_dura} onChange={(e) => setCrse_dura(e.target.value)}/>

                                    <input type="text" className="field" autoComplete="off" required placeholder="Course start from (ex.- April)"value={crse_start} onChange={(e) => setCrse_start(e.target.value)}/>

                                    <input type="number" className="field" autoComplete="off" required placeholder="Fees" value={fees} onChange={(e) => setFees(e.target.value)}/>

                                    <input type="text" className="field" autoComplete="off" required placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}/>

                                    <textarea type="text" className="field" autoComplete="off" required placeholder="About your course" value={crse_about} onChange={(e) => setCrse_about(e.target.value)}/>

                                    
                                    <button className="btn" type="submit">Pay Now 20/-</button>
                                   
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <script src="C:\Users\anubrata\Desktop\react\sara\src\components\teacher_dashboard_handel.js" />
        </>
    )
}
