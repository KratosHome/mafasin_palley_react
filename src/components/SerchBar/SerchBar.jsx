import React from 'react';
import { colorList, ratingList, sixeList } from '../../constants/constants';
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
    buttonReting,
    setButtonSize,
    buttonSize,
    setButtonColor,
    buttonColor
}) => {
    return (
        <div className='SearchBarContainer'>
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
            <div className='FiltetBrendH1'>
                <p className='FilterSliderSearcBar'>Prise</p>
                <FilterSlider
                    valuePrise={selectedPrice}
                    changePrice={changePrice}
                />
            </div>
            <div className='FiltetBrendH1'>
                <p>Reting</p>
                <FiterButtonS
                    options={ratingList}
                    value={buttonReting}
                    changeButtonFilter={changeButtonFilter}
                />
            </div>
            <div className='FiltetBrendH1'>
                <p>Size</p>
                <FiterButtonS
                    options={sixeList}
                    value={buttonSize}
                    changeButtonFilter={setButtonSize}
                />
            </div>
            <div className='FiltetBrendH1'>
                <p>Color</p>
                <FiterButtonS
                    options={colorList}
                    value={buttonColor}
                    changeButtonFilter={setButtonColor}
                />
            </div>
        </div>
    );
}

export default SerchBar;
