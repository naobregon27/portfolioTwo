import "./members.css"
import img from "../props/WhatsApp Image 2023-09-13 at 10.04.25.jpeg"
import { useState } from "react";

const Members = () => {

    const [isHovered1, setIsHovered1] = useState(true);
    const [isHovered2, setIsHovered2] = useState(true);
    const [isHovered3, setIsHovered3] = useState(true);
    const [isHovered4, setIsHovered4] = useState(true);

    const handleHovered1 = () => {
        setIsHovered1(!isHovered1);
    };

    const handleHovered2 = () => {
        setIsHovered2(!isHovered2);
    };

    const handleHovered3 = () => {
        setIsHovered3(!isHovered3);
    };

    const handleHovered4 = () => {
        setIsHovered4(!isHovered4);
    };

    //navigator

    const handleNavigator1 = () => {
        setTimeout(
            () =>
                window.open(
                    "https://boisterous-quokka-2d7e4d.netlify.app/"
                ),
            1000
        );
        toast.loading(`Redirecting to my LinkedIn profile`);
    };

    const handleNavigator2 = () => {
        setTimeout(
            () =>
                window.open(
                    "https://effortless-unicorn-7eeff8.netlify.app/"
                ),
            1000
        );
        toast.loading(`Redirecting to my LinkedIn profile`);
    };

    const handleNavigator3 = () => {
        setTimeout(
            () =>
                window.open(
                    "https://pf-spooty-fans-two.vercel.app/"
                ),
            1000
        );
        toast.loading(`Redirecting to my LinkedIn profile`);
    };

    const handleNavigator4 = () => {
        setTimeout(
            () =>
                window.open(
                    "https://github.com/naobregon27/PI-Countries"
                ),
            1000
        );
        toast.loading(`Redirecting to my LinkedIn profile`);
    };

    return (
        <div id="member" className="container members-container">
            <h1 className="members-txt"> Proyectos Mas recientes</h1>
            <div className="member-1">
                <div className="member-img-1">

                </div>
                <div className="member-info">
                    <h1 className="name"> Landing Page</h1>
                    <h3 className="position">influence</h3>
                    <h4 className="about">Es una Landing Page/publicidad en donde muestra el servicio que ofrece el influence para sus cliente. Tiene animaciones, cambios de imagenes y texto al mismo tiempo.
                        <br />
                        <br />

                        <ul>
                            Skills aplicados:
                            <li>-HTML</li>
                            <li>-CSS</li>
                            <li>-JavaScript</li>
                        </ul>


                    </h4>
                    <a href="#contact" className="contact-member">
                        <span
                        onMouseLeave={handleHovered1}
                        onClick={handleNavigator1}
                        >contact</span>
                    </a>
                </div>
            </div>

            <div className="members member-1">
                <div className="member-img-2"></div>
                <div className="member-info">
                    <h1 className="name">Cotizadora</h1>
                    <h3 className="position">Calculos, grafica, formularios React y Dashboard</h3>
                    <h4 className="about">Es una aplicacion full stack con alta funcionalidad, base de datos y consume una api propia en donde su informacion se encuentra de un formato JSON obtenida por un exel de la empresa. Tiene un Dashboard en donde hay un login para personal autorizado (/login) en donde se puede modificar, actulizar y eliminar datos de comunas.
                        <br />
                        <br />
                    </h4><ul>Skills utilizados:
                        <li>React js</li>
                        <li>Node js </li>
                        <li>PostgreSQL</li>
                        <li>Booststrap</li>
                    </ul>
                    <a href="#contact" className="contact-member">
                        <span
                        onMouseLeave={handleHovered2}
                        onClick={handleNavigator2}>
                            contact</span>
                    </a>
                </div>
            </div>

            <div className="members member-1">
                <div className="member-img-3"></div>
                <div className="member-info">
                    <h1 className="name">SpotyFans</h1>
                    <h3 className="position">Diseño web, musica en la nuve, Dashboard, pasarellas de pagos, busqueda de musica por genero.</h3>
                    <h4 className="about">
                        Explora una gran variedad de géneros musicales y descubre a talentosos artistas independientes que comparten sus creaciones únicas. Ya sea que te guste el pop enérgico, el hip-hop inspirador o la elegancia del jazz, estamos seguros de que encontrarás algo que toque las fibras de tu alma musical.
                        Publica tus propias canciones y deja que el mundo las escuche, ademas, los oyentes podrán disfrutar de un chat propioen cada canción.
                    </h4>
                    <br />
                    <ul>Skills Utilizados:
                        <li>Diseño web: Tailwind, Css</li>
                        <li>Front End: React js, Cloudinary  </li>
                        <li>Back End: Node Js, Express</li>
                        <li>Base de Datos: Maria DB</li>
                    </ul>
                    <a href="#contact" className="contact-member">
                        <span
                         onMouseLeave={handleHovered3}
                         onClick={handleNavigator3}>contact</span>
                    </a>
                </div>
            </div>

            <div className="members member-1">
                <div className="member-img-4"></div>
                <div className="member-info">
                    <h1 className="name">Country</h1>
                    <h3 className="position">Applicacion full stack, diseño simple con funcionalidades robustas.</h3>
                    <h4 className="about">
                        <ul>Las principales funciones de esta SPA son:
                            <li> Filtrar los países por Continentes.</li>
                            <li> Filtrar los países por Actividades turísticas.</li>
                            <li>Tener la posibilidad de combinar ambos filtros.</li>
                            <li>Ordenar alfabéticamente, o por cantidad de población.</li>
                            <li>Buscar lo países por Nombre, pudiendo buscar dentro
                                de los países previamente filtrados.
                            </li>
                            <li>Crear nuevas actividades turísticas.</li>
                        </ul>
                    </h4>
                    <br />
                    <ul>Skills Utilizados:
                        <li>JavaScript</li>
                        <li>Diseño web: Bootstrap, Css</li>
                        <li>Front End: React js, Redux  </li>
                        <li>Back End: Node Js, Express</li>
                        <li>Base de Datos: PostgreSQL</li>
                    </ul>
                    <a href="#contact" className="contact-member">
                        <span
                         onMouseLeave={handleHovered4}
                         onClick={handleNavigator4}>contact</span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Members