import React from 'react'
import axios from "axios"
import {
    BrowserRouter as Router,
    Link,useNavigate,useLocation ,useParams
} from "react-router-dom";
import "../cssfile/payment.css"

const Payment = (props) => {
    const navigate = useNavigate();
//     const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const formData = searchParams.get('data');
const { data } = props.location.state;
console.log(data);
    const handleSubmit = async (event) => {
        event.preventDefault();
        

        //const formData = new FormData();
        try {
            //const response = await axios.post("http://localhost/api/teacher_new_crseP.php", formData);
            //console.log(response.data.phpresult);
            //navigate('/payments');
        } catch (error) {
            console.error(error);
            alert("Error uploading video.");
        }
    };
    return (
        <>
            <body class="pay_bod" onSubmit={handleSubmit}>
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
                                <button type="submit" name="sbm" value="Sub">PAY 20/- NOW</button>
                            </div>
                        </div>
                    </form>
                </div>
            </body>
        </>
    )
}
export default Payment;