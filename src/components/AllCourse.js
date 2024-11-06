import React, { useState, useEffect } from 'react'
import axios from "axios"
import {
    BrowserRouter as Router,
    Link,useLocation
} from "react-router-dom";
import "../cssfile/teacher_dashboard.css"
import "../cssfile/add_new_course.css"
import "../cssfile/allcourse.css"
import EditCourse from "./EditCourse"

export default function AllCourse() {
    const location = useLocation()
    const [searchValue, setSearchValue] = useState(location.state);
    console.log(location.state);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost/api/teacherPrevCourseP.php?search=${searchValue}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, [searchValue]);
    const handleDeleteClick = (id) => {
        console.log(id)
        fetch(`http://localhost/api/allcourse.php?deleteId=${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
        alert("successfully deleted");
    };
    const [viewState2, setViewState2] = useState("search")
    return (
        <>
        <body class="body_allcourse">
			{/* {viewState2 === "search" ? */}
        <div><h2 class="all_course_h2">All Course</h2>
            <div class="activity-data">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Course start</th>
                            <th scope="col">Course fees</th>
                            <th scope="col">Delete Course</th>
                            <th scope="col">Edit Course</th>
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
                                    {/* <button  onClick={() => setViewState2(row.crse_id) }>Edit Course</button> */}
                                    <Link to="/editcourse" state={ row.crse_id }>
																				Edit Course</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            {/* <button onClick={() => {props.setViewState("search") }} type="submit">go Back</button> */}
        </div>
        {/* // : <EditCourse viewState2={viewState2} setViewState2={setViewState2} />} */}
        </body>
        </>
    )
}
