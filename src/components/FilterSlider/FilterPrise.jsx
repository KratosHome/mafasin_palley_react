import React from 'react';
import { Slider } from '@mui/material';
import "./FilterPrise.css"



const FilterPrise = ({ valuePrise, changePrice }) => {
 

    return (
        <div>
            <Slider
                value={valuePrise}
                onChange={changePrice}
                valueLabelDisplay='on'
                max={25}
                min={5}
            />
        </div>
    );
}

export default FilterPrise;
