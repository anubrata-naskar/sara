import React from 'react'
import {
	BrowserRouter as Router,
	Link,
} from "react-router-dom";
import "../cssfile/home.css"

export default function Home() {
    return (
        <>
            <body class="bod_a1b2c3">

                <header class="head_a1b2">

                    <nav class="navy_a1b2">
                        <img class="loimgise" src="/TutiPie.png"/>
                            <div class="logoise"><h1 class="logoise_h1">TutiPie</h1></div>
                            <div class="menuise">
                                <Link to="#" ><span>Home</span></Link>
                                <Link to="about.html">About</Link>
                                <Link to="/contact">Contact Us</Link>
                                <Link to="#" class="btn_fyt">Admin</Link>
                            </div>
                    </nav>

                    <main class="mai_a1b2">
                        <div class="secy_a1b2">
                            <h1><span class="secy_a1b2_span">Welcome to our Website</span></h1>
                            <h3>Perfect Destination for your Ideal Teacher</h3>
                            <h1>DO COME & SEARCH FOR <span class="change_content"> </span> <span class="change_content_span"></span> </h1>
                            <p>“A good teacher is like a candle,it consumes itself to light the way for others.” - Mustafa Kemal Ataturk</p><br/><br/><br/>
                                <Link to="#" class="btnone_abc">For Teachers</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to="#" class="btntwo_def">For Learners</Link>
                        </div>
                    </main>
                            </header>

                            <footer class="xyzfooter">
                                <div class="containing">
                                    <div class="rowheight">
                                        <div class="xyzfooter-col">
                                            <h4>Company</h4>
                                            <ul>
                                                <li><Link to="about.html">About us</Link></li>
                                                <li><Link to="#">Our services</Link></li>
                                                <li><Link to="#">Privacy policy</Link></li>
                                            </ul>
                                        </div>
                                        <div class="xyzfooter-col">
                                            <h4>Get Help</h4>
                                            <ul>
                                                <li><Link to="#">FAQ</Link></li>
                                                <li><Link to="#">payment options</Link></li>
                                                <li><Link to="contact.html">contact us</Link></li>
                                            </ul>
                                        </div>
                                        <div class="xyzfooter-col">
                                            <h4>follow us</h4>
                                            <div class="mine-social-links">
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
