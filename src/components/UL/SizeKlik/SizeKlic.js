import React, {useState} from 'react';
import "./SizeKlick.css"

const SizeKlic=({size}) => {

    const [sizeActiv, setSizeActiv]=useState(false)

    function HanDalClick(e) {
        const clasDef=e.target.className="ProductSizeName" ? e.target.className="ProductSizeNameActiv" : e.target.className="ProductSizeName"
        return clasDef
    }


    return (
        <div className={"ProductSizeName"} onClick={sizeActiv}>
            {size}
        </div>
    );
};

export default SizeKlic;