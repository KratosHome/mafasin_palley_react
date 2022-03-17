import React from 'react';
import "./FiterButton.css"

const FiterButtonS = ({ options, value, changeButtonFilter }) => {

    return (
        <form
            onClick={e => changeButtonFilter(e.target.value)}
            htmlFor={value}
        >
            {options.map(item =>
                <button
                    className={value === item.value ? "FiterButtonInputActiv" : "FiterButtonInput"}
                    key={item.id}
                    type="button"
                    value={item.value}
                    id={item.value}
                >
                    {item.label}
                </button>
            )}
        </form>
    );
}

export default FiterButtonS;
