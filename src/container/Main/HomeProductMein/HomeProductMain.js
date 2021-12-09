import React from 'react';
import "./HomeProductMain.css"
import HomeProduct from "../../../components/ProductList/HomeProduct";

const HomeProductMain=() => {
    return (
        <div className="container bacground_home_product_main">
            <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
                <div className='home_product_container'>
                    <HomeProduct/>
                    <HomeProduct/>
                    <HomeProduct/>
                    <HomeProduct/>
                </div>
            </div>
        </div>
    );
};

export default HomeProductMain;