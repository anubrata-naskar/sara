import React, { useState, useEffect } from 'react'
import axios from "axios"
import {
	BrowserRouter as Router,
	Link,
} from "react-router-dom";
import "../cssfile/admin_dash.css"
import "../cssfile/add_new_course.css"
import "../cssfile/edit_course.css"
import "../cssfile/query.css"
import TeacherDashHome from "./TeacherDashHome"
import logo from "./logo.jpg";
import AllCourse from "./AllCourse"

export default function Admin(props) {
	const [email, setEmail] = useState(props.email);
	const [crse_name, setCrse_name] = useState("");
	const [exp, setExp] = useState("");
	const [crse_for, setCrse_for] = useState("");
	const [crse_dura, setCrse_dura] = useState("");
	const [crse_start, setCrse_start] = useState("");
	const [fees, setFees] = useState("");
	const [location, setLocation] = useState("");
	const [crse_about, setCrse_about] = useState("");

	const [displayedContent, setDisplayedContent] = useState(null);


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

	const [data, setData] = useState([]);
	const [data2, setData2] = useState([]);
	const [data3, setData3] = useState();
	const [data4, setData4] = useState();
	const [data5, setData5] = useState();
	const [searchValue, setSearchValue] = useState();
	useEffect(() => {
		fetch(`http://localhost/api/allteacher.php`)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error));
	}, [searchValue]);
	useEffect(() => {
		fetch(`http://localhost/api/allstudents.php`)
			.then((response) => response.json())
			.then((data) => setData2(data))
			.catch((error) => console.log(error));
	}, [searchValue]);
	useEffect(() => {
		fetch(`http://localhost/api/totalteachers.php`)
			.then((response) => response.json())
			.then((data) => setData3(data))
			.catch((error) => console.log(error));
	}, [searchValue]);
	useEffect(() => {
		fetch(`http://localhost/api/totalstudents.php`)
			.then((response) => response.json())
			.then((data) => setData4(data))
			.catch((error) => console.log(error));
	}, [searchValue]);
	useEffect(() => {
		fetch(`http://localhost/api/revenue.php`)
			.then((response) => response.json())
			.then((data) => setData5(data))
			.catch((error) => console.log(error));
	}, [searchValue]);
	const [data13, setData13] = useState([]);
    useEffect(() => {
        fetch(`http://localhost/api/queryR.php?`)
            .then((response) => response.json())
            .then((data) => setData13(data))
            .catch((error) => console.log(error));
    });


	const handleDeleteClick = (id) => {
		console.log(id)
		fetch(`http://localhost/api/callcourse.php?deleteId=${id}`)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error));
		alert("successfully deleted");
	};


	const [selectedTask, setSelectedTask] = useState('Task 1');
	const [viewState, setViewState] = useState(null);
	console.log(viewState);

	return (
		<>
			{/* {viewState === "search" ? */}
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
								<ul class="nav-links_admin">
									<li>
										<button class="button_admin" onClick={() => setSelectedTask('Task 1')}><i class="fa fa-home icon" />
											<span class="link-name">	Dashboard</span></button>
									</li>
									<li>
										<button class="button_admin" onClick={() => setSelectedTask('Task 2')}><i class="fa-solid fa-book-open-reader icon" />
											<span class="link-name">	Add a Course</span></button>
									</li>
									<li>
										<button class="button_admin" onClick={() => setSelectedTask('Task 3')}><i class="fas fa-user icon"></i>
											<span class="link-name">	Teachers</span></button>
									</li>
									<li>
										<button class="button_admin" onClick={() => setSelectedTask('Task 4')}><i class="fa-solid fa-user-graduate icon"></i>
											<span class="link-name">	Students</span></button>
									</li>
									<li>
										<button class="button_admin" onClick={() => setSelectedTask('Task 5')}><i class="fa fa-comment icon"></i>
											<span class="link-name">	Queries</span></button>
									</li>
								</ul>


								<ul class="logout-mode">
									<li><a href="#">
										<Link to="/">
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
									<div class="admin_hello">Welcome Admin{props.userName}</div>
									<div class="container2_3" >
                                 		<input type="text" name="search" placeholder="Search here..." class="input" autoComplete="off"/>
                                    	<button class="btn2_3  " type="submit">
                                    		<i class="fas fa-search" />Search
                                    	</button>
                            		</div>

								</div>

								<div class="dash-content">
									<div class="overview">
										<div class="title">
											<span class="text">Hi Admin <br />
												Have a Good Day..!!</span><br />
										</div>
									</div>
									<br />
									<br />
									<div class="card-row_admin">
 											<div class="card_admin">
											 	<div class="box_admin">
                        							<h1 class="card_admin_h3">{data4}</h1>
                        							<h3 class="card_admin_h3">Students</h3>
                    							</div>
                    							<div class="icon-case">
												<i class="fa-solid fa-graduation-cap fa-2xl"></i>
                    							</div>
										    </div>
  											<div class="card_admin">
											  <div class="box_admin">
                        							<h1 class="card_admin_h3">{data3}</h1>
                        							<h3 class="card_admin_h3">Teachers</h3>
                    							</div>
                    							<div class="icon-case_2">
												<i class="fas fa-chalkboard-teacher fa-2xl"></i>
                    							</div>
  											</div>
  											<div class="card_admin">
											  <div class="box_admin">
                        							<h1 class="card_admin_h3">{data5}</h1>
                        							<h3 class="card_admin_h3">Revenue</h3>
                    							</div>
                    							<div class="icon-case">
												<i class="fa-solid fa-hand-holding-dollar fa-2xl"></i>
                    							</div>
  											</div>
									</div>

									
								</div>
							</section>
						</div>}

						{selectedTask === 'Task 2' && <div> <section className="dashboard">
							<div className="top">
								<i className="uil uil-bars sidebar-toggle"></i>
									<div class="admin_hello">Welcome Admin{props.userName}</div>
									<div class="container2_3" >
                                 		<input type="text" name="search" placeholder="Search here..." class="input" autoComplete="off"/>
                                    	<button class="btn2_3  " type="submit">
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
                                        <input type="text" autoComplete="off"  placeholder="Enter course name" onChange={(e) => setCrse_name(e.target.value)} />
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
                                        <input type="submit" value="Submit"/>
                                    </div>
                            </form>
								</div>
							</div>
						</section></div>}

						{selectedTask === 'Task 3' && <div><section class="dashboard">
							<div class="top">
								<i class="uil uil-bars sidebar-toggle"></i>
								<div class="admin_hello">Welcome Admin{props.userName}</div>
								<div class="container2_3" >
                                 		<input type="text" name="search" placeholder="Search here..." class="input" autoComplete="off"/>
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
												<div class="title">

													<span class="text">All TEACHERS</span>
												</div>

												<div class="activity-data">
													<table class="table table-striped table-hover">
														<thead>
															<tr>
																<th scope="col">Name</th>
																<th scope="col">Phone</th>
																<th scope="col">Email</th>
																<th scope="col">Block</th>
																<th scope="col">Courses</th>
																<th scope="col">Profile</th>
															</tr>
														</thead>
														<tbody>
															{data.map((row) => (
																<tr key={row.email}>
																	<td scope="row">{row.name}</td>
																	<td>{row.phone}</td>
																	<td>{row.email}</td>
																	<td>
																		{/* <button onClick={() => handleDeleteClick(row.crse_id)}>
																		</button> */}
																		<i class="fa-solid fa-trash fontp" size="xl" style={{ color: "#ff0a0a", }} onClick={() => handleDeleteClick(row.email)} />

																	</td>
																	<td>
																		
																		{/* <button onClick={() => setViewState(row.email)}> */}
																			{/* <Link to={{pathname:'/allcourse', state: row.email}}> */}
																			<Link to="/allcourse" state={ row.email }>
																				View All Courses</Link>
																			{/* </button> */}
																	</td>
																	<td>
																	<Link to="/tprofile" state={ row.email }>
																				View</Link>
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
						{selectedTask === 'Task 4' && <div><section class="dashboard">
							<div class="top">
								<i class="uil uil-bars sidebar-toggle"></i>
								<div class="admin_hello">Welcome Admin{props.userName}</div>
								<div class="container2_3" >
                                 		<input type="text" name="search" placeholder="Search here..." class="input" autoComplete="off"/>
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
												<div class="title">

													<span class="text">All STUDENTS</span>
												</div>

												<div class="activity-data">
													<table class="table table-striped table-hover">
														<thead>
															<tr>
																<th scope="col">Name</th>
																<th scope="col">Phone</th>
																<th scope="col">Email</th>
																<th scope="col">Status</th>
																<th scope="col">Block</th>
																<th scope="col">Profile</th>
															</tr>
														</thead>
														<tbody>
															{data2.map((row) => (
																<tr key={row.email}>
																	<td scope="row">{row.name}</td>
																	<td>{row.phone}</td>
																	<td>{row.email}</td>
																	<td>{row.school}</td>
																	<td>
																		{/* <button onClick={() => handleDeleteClick(row.crse_id)}>
																		</button> */}
																		<i class="fa-solid fa-trash fontp" size="xl" style={{ color: "#ff0a0a", }} onClick={() => handleDeleteClick(row.email)} />
																	</td>
																	<td>
																	<Link to="/sprofile" state={ row.email }>
																				View</Link>
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
						{selectedTask === 'Task 5' && <div><section class="dashboard">
						<div class="top">
							<i class="uil uil-bars sidebar-toggle"></i>
							<div class="admin_hello">Welcome Admin{props.userName}</div>
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
												<span class="text_query">Queries</span>
											</div>
										</div>
										<table class="table-fill_honey">
											<thead>
												<tr>
													<th class="text-left_modi">Name</th>
													<th class="text-left_modi">Email</th>
													<th class="text-left_modi">Mobile</th>
													<th class="text-left_modi">Message</th>
													<th class="text-left_modi">Response</th>
													<th class="text-left_modi">Done</th>
												</tr>
											</thead>
											<tbody class="table-hover">
											{data13.map((row) => (
												<tr class="table_query_row">
													<td class="text-left_modi">{row.name}</td>
													<td class="text-left_modi">{row.email}</td>
													<td class="text-left_modi">{row.phn_no}</td>
													<td class="text-left_modi">{row.message}</td>
													<td class="text-left_modi"><button><i class="fa-sharp fa-solid fa-reply fa-xl reply123"></i></button></td>
													<td class="text-left_modi"><h1><button><i class="fa-solid fa-check green123" ></i></button></h1></td>
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
			{/* } */}
		</>
	)
}

