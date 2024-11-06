import React from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import "../cssfile/teacher_dashboard.css"
import logo from "./logo.jpeg";


export default function Teacher_prev_crse() {
  return (
    <body>
    <nav>
        <div class="logo-name">
            <div class="logo-image">
            <img src={logo} alt="not found"/>
            </div>

            <span class="logo_name">TutiPie</span>
        </div>

        <div class="menu-items">
        <ul class="nav-links">
                <li>
                <Link to="/teacherdash"><i class="uil uil-estate"></i>
                    <span class="link-name">Dahsboard</span></Link>
                </li>
                <li>
                <Link to="/teachernew"><i class="uil uil-files-landscapes"></i>
                    <span class="link-name">Add a New Course</span></Link>
                </li>
                <li>
                <Link to="/teacherprev"><i class="uil uil-files-landscapes"></i>
                    <span class="link-name">Already Added Course</span></Link>
                </li>
            </ul>
            
            <ul class="logout-mode">
                <li><a href="#">
                    <i class="uil uil-signout"></i>
                    <span class="link-name">Logout</span>
                </a></li>

                <li class="mode">
                    <a href="#">
                        <i class="uil uil-moon"></i>
                    <span class="link-name">Dark Mode</span>
                </a>

                <div class="mode-toggle">
                  <span class="switch"></span>
                </div>
            </li>
            </ul>
        </div>
    </nav>

    <section class="dashboard">
        <div class="top">
            <i class="uil uil-bars sidebar-toggle"></i>
            <div>SARA</div>
            <div class="search-box">
                <i class="uil uil-search"></i>
                <input type="text" placeholder="Search here..."/>
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
                                <div class="data names">
                                    <span class="data-title" align="center"><b>Course Name</b></span>
                                    <span class="data-list" align="center">Artificial Intelligence</span>
                                    <span class="data-list" align="center">Multimedia</span>
                                </div>
            
                                <div class="data email">
                                    <span class="data-title" align="center"><b>Fees(per month)</b></span>
                                    <span class="data-list" align="center">500</span>
                                    <span class="data-list" align="center">400</span>
                                </div>
            
                                <div class="data joined">
                                    <span class="data-title" align="center"><b>Rating</b></span>
                                    <span class="data-list" align="center">4.5</span>
                                    <span class="data-list" align="center">4</span>
                                </div>
            
                                <div class="data joined">
                                    <span class="data-title" align="center"><b>Click to remove</b></span>
                                    <span class="data-list" align="center"><a href="remove.php">remove</a></span>
                                    <span class="data-list" align="center"><a href="remove.php">remove</a></span>
                                </div>
            
                            </div>
                        </div>    
                </div>
            </div>      
        </div>
        </div>
    </section>

    <script src="C:\Users\anubrata\Desktop\react\sara\src\components\teacher_dashboard_handel.js"/>
</body>
  )
}
