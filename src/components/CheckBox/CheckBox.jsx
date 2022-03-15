import React from 'react';
import "./CheckBox.css"

const CheckBox = ({ lablelist, changeChecked }) => {
    const { checked, lable, id } = lablelist;

    return (
        <div className="containerCheckBox">
            <input
                type="checkbox"
                className='custom-checkbox' 
                id={lable}
                name={lable}
                onChange={() => changeChecked(id)}
                value={checked}
            />
            <label htmlFor={lable}>{lable}</label>
        </div>
    );
}

export default CheckBox;
