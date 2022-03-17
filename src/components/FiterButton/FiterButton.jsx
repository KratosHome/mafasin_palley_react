import React, { useState } from 'react';
import "./FiterButton.css"

const FiterButtonS = ({ options, value, changeButtonFilter }) => {


    return (
        <label
            onClick={e => changeButtonFilter(e.target.value)}
            htmlFor={value}
            className={value ? "FiterButtonInputActiv" : null}
        >
            {options.map(item =>
                <input
                    className="FiterButtonInput"
                    key={item.id}
                    type="button"
                    value={item.label}
                    id={item.value}
                />
            )}
        </label>
    );
}

export default FiterButtonS;
