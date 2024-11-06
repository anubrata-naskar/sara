import React, { useState } from 'react';
import axios from "axios"
import { Navigate, useNavigate, Link, useSearchParams } from "react-router-dom";
import "../cssfile/otp.css"

export default function ChangePassS() {
    const [searchparams] = useSearchParams();
    const [email, setEmail] = useState(searchparams.get("email"));
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (pass1 == pass2) {
            try {
                await axios.post('http://localhost/api/changpassstu.php', {
                    email: email,
                    pass1: pass1,
                });
                alert("password change successfull");
                navigate('/studentlogin');
            } catch (error) {
                console.log(error);
            }
        }
        else {
            alert("password not match");
        }
    };
    return (
        <body class="body_reg">
            <div class="container_reg">
                <div class="title_reg">New Password</div>
                <div class="content_reg">
                    <form onSubmit={handleSubmit} class="form_reg">
                        <div class="user-details_reg">
                            <div class="input-box_reg">
                                <span class="details_reg">Enter New Password</span>
                                <input type="password" placeholder="enter new password" class="field_reg" value={pass1} onChange={(e) => setPass1(e.target.value)} />
                                <input type="password" placeholder="confirm password" class="field_reg" value={pass2} onChange={(e) => setPass2(e.target.value)} />
                            </div>
                            <div class="button_reg">
                                <input type="submit" value="Register" class="btn_reg" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    )
}
