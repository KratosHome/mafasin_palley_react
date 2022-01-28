import React, {useState} from 'react';
import "./SizeKlick.css"

const SizeKlic=({size}) => {
    const [sizeActiv, setSizeActiv]=useState(true)

    return (
        <>
            <div className={sizeActiv ? "ProductSizeNameActivFirst" : "ProductSizeNameAnActib, ProductSizeNameActiv"}
                 onClick={() => setSizeActiv(!sizeActiv)}>
                {size}
            </div>
        </>
    );
};

export default SizeKlic;