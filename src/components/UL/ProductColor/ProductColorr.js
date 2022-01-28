import React, {useState} from 'react';
import "./ProductColor.css"

const ProductColor=({color}) => {
    const [activ, setActiv]=useState(true)

    return (
        <div className={activ ? color + " noActiv ActivFitsShild" : color + " ActivFitsShild1"}
             onClick={() => setActiv(!activ)}></div>
    );
};

export default ProductColor;