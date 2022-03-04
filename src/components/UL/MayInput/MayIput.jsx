import React from 'react';
import classes from "./Mainput.module.css"

const MayIput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myInput} {...props}/>
    );
})
 
export default MayIput;
