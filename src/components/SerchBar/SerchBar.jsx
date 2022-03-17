import React from 'react';
import { ratingList } from '../../constants/constants';
import CheckBox from '../CheckBox/CheckBox';
import FilterSlider from '../FilterSlider/FilterPrise';
import FiterButtonS from '../FiterButton/FiterButton';

import "./SerchBar.css"


const SerchBar = ({
    brands,
    changeChecked,
    category,
    handleChangeCheckedCategory,
    selectedPrice,
    changePrice,
    changeButtonFilter,
    buttonReting
}) => {
    return (
        <div>
            <div className='FiltetBrendH1' >
                <p>Brends</p>
                <div className='filterBrands'>
                    {brands.map(brand => (
                        <CheckBox
                            key={brand.id}
                            lablelist={brand}
                            changeChecked={changeChecked}
                        />
                    ))}
                </div>
            </div>
            <div className='FiltetBrendH1'>
                <p>Categori</p>
                <div className='filterBrands'>
                    {category.map(brand => (
                        <CheckBox
                            key={brand.id}
                            lablelist={brand}
                            changeChecked={handleChangeCheckedCategory}
                        />
                    ))}
                </div>
            </div>
            <div>
                <p>Prise</p>
                <FilterSlider
                    valuePrise={selectedPrice}
                    changePrice={changePrice}
                />
            </div>

            <div>
                <p>Reting</p>
                <FiterButtonS
                    options={ratingList}
                    value={buttonReting}
                    changeButtonFilter={changeButtonFilter}
                />
            </div>
            <div>
                <p>Reting</p>

            </div>
            <div>
                <p>Size</p>

            </div>
            <div>
                <p>Color</p>

            </div>
        </div>
    );
}

export default SerchBar;
