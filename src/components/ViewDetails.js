import React, { useState, useEffect } from 'react'
import "../cssfile/viewdetails.css"
import "../cssfile/student_review.css"
import { useSearchParams, useParams } from 'react-router-dom';
import axios from 'axios';
import { Modal, ModalHeader } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};
function yellowStars(num) {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<i className="fa fa-star" style={{ color: 'orange' }} />);
    }
    return stars;
  }
export default function ViewDetails(props) {
    const [course, setCourse] = useState([]);
    const [user, setUser] = useState([]);
    const [user2, setUser2] = useState([]);
    const [searchValue, setSearchValue] = useState(props.viewState);
    const [email, setEmail] = useState('');
    const [crse_name, setCrse_name] = useState('');
    const [queryParameters] = useSearchParams();
    let courseId = props.viewState
    // console.log(queryParameters.crseId, queryParameters.email);

    // console.log(courseId);
    // Fetch data
    // useEffect(() => {
    //     fetch(` http://localhost/api/viewdetailsP.php?search=${searchValue}`)
    //         .then((response) => response.json())
    //         .then((data) => setUser(data))
    //         .catch((error) => console.log(error));
    // }, [searchValue]);

    useEffect(() => {
        axios.get(`http://localhost/api/viewdetailsP.php?search=${searchValue}`)
            .then(response => {
                setUser(response.data);
                const data = response.data;
                const row = data[0]; // fetch the third row (arrays are zero-indexed)
                setEmail(row.email); // replace "columnName" with the actual name of the column
                setCrse_name(row.crse_name);
            })
            .catch(error => {
                console.error(error);
            });
    }, [searchValue]);

    useEffect(() => {
        axios.get(`http://localhost/api/viewusersP.php?search=${email}`)
            .then(response => {
                setUser2(response.data);
                //console.log(user2);
                
            })
            .catch(error => {
                console.error(error);
            });
    }, [email]);


    // setEmail({user[0].email});

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");

    const handleClick = value => {
        setCurrentValue(value)
        setRating(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("review", review);
        formData.append("rating", rating);
        formData.append("email", email);
        formData.append("searchValue", props.email);


        try {
            await axios.post("http://localhost/api/rating.php", formData);
            alert("Information added successfully!");
        } catch (error) {
            console.error(error);
            alert("Error uploading video.");
        }
    };


    // useEffect(() => {
    //     // try {
    //     //   const response =  axios.post('http://localhost/api/avgrating.php', {
    //     //     crse_id: crse_id,
    //     //   });

    //     //   setRating(response.data.phpresult);
    //     //   console.log(response.data);
    //     //   // Redirect the user to the dashboard page
    //     // } catch (error) {
    //     //   console.log(error);
    //     // }
    //     axios.post('http://localhost/api/avgrating.php', { email })
    //       .then(response => {
    //         console.log(response.data);
    //         setRating(response.data);
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   }, [email]);

    const [vRating, setVRating] = useState("");

    useEffect(() => {
        axios.post('http://localhost/api/avgrating.php', { email })
            .then(response => {
                console.log(response.data);
                setVRating(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [email]);

    const Rating = ({ value }) => (
        <div>
            {[...Array(value)].map((_, i) => (
                <FaStar key={i} filled={i < value} />
            ))}
        </div>
    );
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
      setLiked(!liked);
      const formData2 = new FormData();
        formData2.append("crse_id", searchValue);
        formData2.append("email", props.email);
        formData2.append("temail", email);
        formData2.append("crseName", crse_name);
        

        try {
            axios.post("http://localhost/api/interest.php", formData2);
        } catch (error) {
            console.error(error);
            alert("something wrong");
        }

    };

    const [openModal, setOpenModal] = useState(false);
    const [temail, tEmail] = useState('');
    const [data2, setData2] = useState([]);
    const modalControl = (ee) => {
        fetch(`http://localhost/api/allreview.php?search=${ee}`)
            .then(response => response.json())
            .then(data => setData2(data))
            .catch(error => console.error(error));

        setOpenModal(true)
    }

    const [rat, setRat] = useState('');
    const [crse_id, setCrse_id] = useState('');
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
                            {data2.map((row)  => (
                                <div class="comment-box" key={row.semail}>
                                    <div class="box-top">
                                        <div class="Name">
                                            {/* <strong><Rating value={} /></strong> */}
                                            {/* <strong> <FaStar key={row.rating} color="orange" /></strong> */}
                                            <strong> {yellowStars(row.rating)}</strong>
                                            <span>{row.semail}</span>
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
            <body class="view_details">
                <div class="wrapper">
                    <div class="left">
                        {user2.map((row) => (
                            <div key={row.crse_id}>
                                <h1 class="view_details_h1">TutiPie</h1>
                                <h5 class="view_details_h4">{row.name}</h5>
                                <h3><Rating value={vRating} /></h3>
                                <div class="view_details_left_details">
                                    <p class="view_details_p">{row.about}</p>
                                    <p class="view_details_p">Age : {row.age} years</p>
                                    <p class="view_details_p">Qualification : {row.qualification}</p>
                                    <p class="view_details_p">Current Status : {row.current_status}</p>
                                    <p class="view_details_p">Past Status : {row.past_status}</p>
                                </div>
                                <button onClick={() => {
                                    props.setViewState("search")
                                }} type="submit"><h6 class="view_details_goback">Go Back</h6></button>
                            </div>
                        ))}
                    </div>

                    <div class="right">
                        <div class="info">
                            <button class="danger danger3"><Link class="view_details_link" to="/">Log Out</Link></button>
                            <h3 class="view_details_about">Contacts </h3>
                            {user2.map((row) => (
                                <div class="info_data">
                                    <div class="data">
                                        <h5 class="view_details_h5">Email</h5>
                                        <p>{row.email}</p>
                                        <br />
                                        <div>
                                            <h5 class="view_details_h5">Review</h5>
                                            {/* <button type="submit" value="view" name="submit" class="btn_view_details" style={style.button} onClick={()=> setOpenModal(true)} /> */}
                                            <button class="fcc-btn_v" onClick={() => modalControl(row.email)} >view</button>
                                        </div>

                                    </div>
                                    <div class="data">
                                        <div class="data">
                                            <h5 class="view_details_h5_address">Address</h5>
                                            <p class="view_details_h5_address">{row.address}</p>
                                            <br />
                                        </div>

                                        <div>
                                            <h5 class="view_details_h5_hh">Sample Video</h5>

                                            <form action="http://localhost/api/video.php" target="_blank" method="post" class="form_view_btn">
                                                <input type="hidden" name="number2" value={searchValue} />
                                                <input type="submit" value="view" name="submit" class="btn_view_details" style={style.button} />
                                            </form>
                                        </div>
                                    </div>
                                    <div class="data">
                                        <h5 class="view_details_h5">Phone</h5>
                                        <p>{row.phone}</p>
                                        <br />
                                        <div>
                                            <h5 class="view_details_h5">Interested?</h5>
                                            {/* <span><i class="fa fa-heart-o"></i></span> */}
                                            <div className={`love-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
                                                <FaHeart className="icon" />
                                            </div>

                                        </div>

                                    </div>
                                </div>))}
                        </div>

                        <div class="projects">
                            <h3 class="view_details_about">About</h3>
                            <div class="projects_data">
                                {user.map((row) => (
                                    <div class="data" key={row.crse_id} crse_id={row.crse_id}>
                                        <h4 class="view_details_under_about_h4">{row.crse_name}</h4>
                                        <p class="view_details_under_about">Course for : {row.crse_for}</p>
                                        <p class="view_details_under_about">Years of Experiace in Java : {row.exp}</p>
                                        <p class="view_details_under_about">Course start from : {row.crse_start}</p>
                                        <p class="view_details_under_about">Course duration : {row.crse_dura} months</p>
                                        <p class="view_details_under_about">Course fees : {row.fees} </p>
                                        <p class="view_details_under_about">Location :{row.location}</p>
                                        <p class="view_details_under_about" >{row.about} </p>

                                    </div>

                                ))}
                                <form style={styles.container} onSubmit={handleSubmit}>
                                    <div style={styles.stars}>
                                        {stars.map((_, index) => {
                                            return (
                                                <FaStar key={index} size={24} onClick={() => handleClick(index + 1)} onMouseOver={() => handleMouseOver(index + 1)} onMouseLeave={handleMouseLeave} color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                                    style={{
                                                        marginRight: 10,
                                                        cursor: "pointer"
                                                    }}
                                                />
                                            )
                                        })}
                                    </div>
                                    <textarea placeholder="What's your experience?" style={styles.textarea} className="field" autoComplete="off" required value={review} onChange={(e) => setReview(e.target.value)} />
                                    <button class="view_details_submit" style={styles.button} type="submit"> Submit </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        </>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10,
    }
};

const style = {
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 100,
        padding: 5,
    }
};