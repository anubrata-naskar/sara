import React, { Component } from 'react'
import "./StyleLoginOps.css";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

class LoginOps extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" ><Link to="/studentlogin">Student Login</Link></li>
                        <li className="list-group-item"><Link to="/teacherlogin">Teacher Login</Link></li>
                        <li className="list-group-item"><Link to="/adminlogin">Admin Login</Link></li>
                        <li className="list-group-item"><Link to="/adminlogin">Test Server</Link></li>
                        <li className="list-group-item"><Link to="/testserver2">Test Server2</Link></li>
                    </ul> 
                </div>
            </div>
        )
    }
}

export default LoginOps