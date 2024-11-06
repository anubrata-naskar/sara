import React, { useState, useEffect } from 'react'
import axios from "axios"
import {
    BrowserRouter as Router,
    Link,useLocation
} from "react-router-dom";
import "../cssfile/teacher_dashboard.css"
import "../cssfile/add_new_course.css"                           
import "../cssfile/edit_course.css"

export default function EditCourse() {
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
    const urllocation = useLocation()
    const [searchValue, setSearchValue] = useState(urllocation.state);
    console.log(urllocation.state);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost/api/editcourse.php?search=${searchValue}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, [searchValue]);
    console.log(data);
    console.log(crse_name);
    return (
        <html>
            <body class="body_edit">
                <div class="container_edit">
                <div class="title_edit">Edit Course</div>
                  <div class="content_edit">
                {data.map((row) => (
                    <div class="overview_edit_form" key={row.crse_id}>
                        <form class="container_form_edit" onSubmit={handleSubmit} >
                            <div class="user-details">

                                    <div class="input-box_edit">
                                        <span class="details">Course Name:</span>
                                        <input type="text" autoComplete="off"  placeholder={row.crse_name} value={crse_name} onChange={(e) => setCrse_name(e.target.value)} />
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
                                        <input type="submit" value="Proceed"/>
                                    </div>
                            </form>
                        </div>))}
                    </div>
                </div>
            </body>
        </html>
    )
}
