import "./footer.css"

import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer (){
    return(
        <div id="footer" className="container footer-container">
            <h1>
                that´s all
                <a href="#home">
                    <h2>
                        <BsMouse/> -Scroll up-
                    </h2>
                </a>
            </h1>
            <div className="social-links">
                <a href="https://www.instagram.com/nahuobr/">
                    <BsInstagram className="social"/>
                </a>
                <a href="www.linkedin.com/in/nahuel-obregon-3b458a268">
                    <BsLinkedin className="social"/>
                </a>
                <a href="https://github.com/naobregon27">
                    <BsGithub className="social"/>
                </a>
                <a href="https://www.facebook.com/nahee.obregon/">
                    <BsFacebook className="social"/>
                </a>
            </div>

        </div>
    )
}

export default Footer