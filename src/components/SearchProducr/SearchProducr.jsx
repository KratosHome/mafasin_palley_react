import React from 'react';
import "./SearchProducr.css"

const SearchProducr = ({value, changeInput}) => {
    return (
        <div className='searcBar'>
            <input
                type="text"
                placeholder='Search Bar'
                value={value}
                onChange={changeInput}
            />
        </div>
    );
}

export default SearchProducr;
