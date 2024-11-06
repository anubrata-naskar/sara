import React from 'react'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

export default function Contact() {
    return (
        <>
            <body class="bod_sec">

                <header class="heady_boy">

                    <nav class="neavy_boy">
                        <img class="loimgseii" src="TutiPie.png"/>
                            <div class="logoseii"><h1 class="logoseii_h1_contact">TutiPie</h1></div>
                            <div class="menuseii">
                                <Link to="front.html">Home</Link>
                                <Link to="about.html">About</Link>
                                <Link to="#"><span style="color: #00b894;">Contact Us</span></Link>
                                <Link to="#" class="beauty">Admin</Link>
                            </div>
                    </nav>
                    <section id="section-wrapper">
                        <div class="box-wrapper">
                            <div class="info-wrap">
                                <h2 class="info-title">Contact Information</h2>
                                <h3 class="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                                <ul class="info-details">
                                    <li>
                                        <i class="fas fa-phone-alt"></i>
                                        <span>Phone:</span> <Link to="#">+033 678 7154</Link>
                                    </li>
                                    <li>
                                        <i class="fas fa-paper-plane"></i>
                                        <span>Email:</span> <Link to="#">tutipie@gmail.com</Link>
                                    </li>
                                    <li>
                                        <i class="fas fa-globe"></i>
                                        <span>Website:</span> <Link to="#">tutipie.com</Link>
                                    </li>
                                </ul>
                                <ul class="social-icons">
                                    <li><Link to="#"><i class="fab fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i class="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i class="fab fa-instagram"></i></Link></li>
                                    <li><Link to="#"><i class="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                            <div class="form-wrap">
                                <form action="#" method="POST">
                                    <h2 class="form-title">Send us a message</h2>
                                    <div class="form-fields">
                                        <div class="form-group">
                                            <input type="text" name="firstname" class="fname" placeholder="First Name"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="lastname" class="lname" placeholder="Last Name"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" name="ename" class="email" placeholder="Mail"/>
                                        </div>
                                        <div class="form-group">
                                            <input type="tel" name="tnumber" class="phone" placeholder="Phone"/>
                                        </div>
                                        <div class="form-group">
                                            <textarea name="message" name="message" placeholder="Write your query/suggestion"></textarea>
                                        </div>
                                    </div>
                                    <input type="submit" name="subnum" value="Send Message" class="sub-button"/>
                                </form>
                            </div>
                        </div>
                    </section>
                </header>

                <footer class="footy">
                    <div class="contains">
                        <div class="rows">
                            <div class="footy-col">
                                <h4>Company</h4>
                                <ul>
                                    <li><Link to="about.html">About us</Link></li>
                                    <li><Link to="#">Our services</Link></li>
                                    <li><Link to="#">Privacy policy</Link></li>
                                </ul>
                            </div>
                            <div class="footy-col">
                                <h4>Get Help</h4>
                                <ul>
                                    <li><Link to="#">FAQ</Link></li>
                                    <li><Link to="#">payment options</Link></li>
                                    <li><Link to="#">contact us</Link></li>
                                </ul>
                            </div>
                            <div class="footy-col">
                                <h4>follow us</h4>
                                <div class="socials-links">
                                    <Link to="#"><i class="fab fa-facebook-f"></i></Link>
                                    <Link to="#"><i class="fab fa-twitter"></i></Link>
                                    <Link to="#"><i class="fab fa-instagram"></i></Link>
                                    <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </body>
        </>
    )
}
