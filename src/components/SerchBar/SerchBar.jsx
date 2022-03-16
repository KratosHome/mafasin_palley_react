import React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import FilterSlider from '../FilterSlider/FilterSlder';
import "./SerchBar.css"

const SerchBar = ({ brands, changeChecked, category, handleChangeCheckedCategory }) => {
    return (
        <div>
            <div className='FiltetBrendH1'>
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
                <FilterSlider />
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
