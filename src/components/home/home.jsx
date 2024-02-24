import "./home.css";
import img from "../props/WhatsApp Image 2023-09-13 at 10.04.25.jpeg"

import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
    return (
        <div id="home" className="container home-container">
            <div className="logo">
                <div className="main-img">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>

                <img src={img} alt="" />
            </div>

            <a href="#footer" className="scroll-down">
                <hr />
                <h5>scroll down</h5>
                <BsMouse className="scroll" />
            </a>

            <h2><span>About me</span><br />

                <p>
                    Full Stack Developer con más de 3 años de experiencia trabajando de forma
                    FreeLance, sólidos conocimientos en el desarrollo de página y aplicaciones web full
                    stack. Con tecnologías que hace de forma más eficiente el trabajo y su funcionamiento.
                    Me eh formado en academias de desarrolladores full stack como Plataforma 5 haciendo
                    un curso intensivo de lo que es HTML, CSS y JavaScript. Luego eh realizado un
                    Bootcamp en Henry en donde solidifique los conocimiento aprendiendo tecnologías
                    como Node JS, React JS y el uso de Base de Datos con lenguaje como MySQL y
                    Sequelize en donde reafirme mi pasión por esta profesión. Soy una persona que está
                    en constante capacitación ya que me permito aprender nuevas tecnologías para
                    afrontar nuevos desafíos tantos académicos como laboral.

                </p>
            </h2>

            <Buttons />
        </div>
    )
}


document.addEventListener("DOMContentLoaded", () => {
    const taggle = document.querySelector(".main-img");
    taggle.addEventListener("click", () => {
        taggle.classList.toggle("active");
    });
});


export default Home;