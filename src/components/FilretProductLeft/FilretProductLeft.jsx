import React from 'react';

const Filretproductleft = ({ getProduct, setSlectProduct }) => {

    return (
        <div className='FilterContainer'>
            <div className="filter_conteiner">
                <h5 className="filter-title">Brends</h5>
                {
                    getProduct.map(prod =>
                        <div key={prod.name} className="characteristics">
                            <input onChange={e => setSlectProduct(e.target.id)} type="checkbox" id={prod.name} />
                            <label htmlFor={prod.name}>{prod.name}</label>
                        </div>
                    )
                }
            </div>
            <div className="filter_conteiner">
                <h5 className="filter-title">Categori</h5>
                {
                    getProduct.map(prod =>
                        prod.categories.map(pro =>
                            <div key={pro} className="characteristics">
                                <input  type="checkbox" id={pro} />
                                <label htmlFor={pro}>{pro}</label>
                            </div>
                        ))
                }
            </div>
            <div className="filter_conteiner">
                <h5 className="filter-title">Size</h5>
                {
                    getProduct.map(prod =>
                        <div key={prod.name} className="characteristics">
                            <input type="checkbox" id={prod.name} />
                            <label htmlFor={prod.name}>{prod.name}</label>
                        </div>
                    )
                }
            </div>
            <div className="filter_conteiner">
                <h5 className="filter-title">Color</h5>
                {
                    getProduct.map(prod =>
                        <div key={prod.name} className="characteristics">
                            <input type="checkbox" id={prod.name} />
                            <label htmlFor={prod.name}>{prod.name}</label>
                        </div>
                    )
                }
            </div>
            <div className="filter_conteiner">
                <h5 className="filter-title">Prise</h5>
                {
                    getProduct.map(prod =>
                        <div key={prod.name} className="characteristics">
                            <input type="checkbox" id={prod.name} />
                            <label htmlFor={prod.name}>{prod.name}</label>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Filretproductleft;
