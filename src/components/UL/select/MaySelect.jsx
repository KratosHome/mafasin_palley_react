import React from 'react';
import classes from "./MaySelect.module.css"

const Mayselect = ({ options, defaultValue, onChange, value }) => {
    return (
        <div className={classes.maySelectContainer}>
            <select 
            value={value}
            className={classes.maySelect}
            onChange={e => onChange(e.target.value)}
            >
                <option disabled>{defaultValue}</option>
                {options.map(opt =>
                    <option key={opt.value} value={opt.value}>{opt.name}</option>
                )}

            </select>
        </div>
    );
}

export default Mayselect;
