import "./contact.css"
import emailjs from "@emailjs/browser";

import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";



function Contact() {
  

    

    return (
        <div className="contacto">

            <div className="container contact-container">
                
                    <h1 className="contacto1">Contactame</h1>
                   
        

                <div className="contact-links">

                    <a href="https://www.linkedin.com/in/nahuel-obregon-3b458a268/" className="contact linkedin">
                        <AiOutlineLinkedin className="icon" />
                        <h2> LinkedIn
                            <span>
                            www.linkedin.com/in/nahuel-obregon-3b458a268
                            </span>
                        </h2>
                    </a>
                </div>

                <div className="contact-links">
                    <a href="https://w.app/nahuelobregon" className="contact whatsapp">
                        <AiOutlineWhatsApp className="icon" />
                        <h2> WhatsSapp
                            <span>
                               +54 3777507158
                            </span>
                        </h2>
                    </a>
                </div>

                <div className="contact-links">
                    <a href="https://mail.google.com/" className="contact Mail"
                    >
                        <AiOutlineMail className="icon"   
                        />
                        <h2> Mail
                            <span>
                                na.obregon@gmail.com
                            </span>
                        </h2>
                    </a>
                </div>

                <div className="contact-links">
                    <a href="https://github.com/naobregon27" className="contact github">
                        <AiOutlineGithub className="icon" />
                        <h2> GitHub
                            <span>
                               /naobregon27
                            </span>
                        </h2>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact;