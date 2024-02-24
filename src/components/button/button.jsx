import "./button.css"

function Buttons (){
    return(
        <div className="button-container">
            <a href="#about" className="btn pri">
                Learn more
            </a>
            <a href="#footer" className="btn sec">
                get in touch

            </a>
        </div>
    );
}

export default Buttons;