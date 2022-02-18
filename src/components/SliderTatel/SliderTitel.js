import React from 'react';
import "./SliderTitel.css"

const SliderTitel=({title, from}) => {
    console.log(from)
    return (
        <div className="slider_title_container">
            <h3>{title}</h3>
            <div>
                <div className="slider_title_container_title_prise">from</div>
                <div className="slider_title_container_prise"> &nbsp;${from}</div>
            </div>
            <button>show naw</button>
        </div>
    );
};

export default SliderTitel;