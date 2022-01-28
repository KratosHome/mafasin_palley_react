import React from "react";
import "./ProductPage.css";
import HotDell from "../HomePage/HotDell/HotDell";
import Grade from "../../components/UL/Grade/Grade";
import ProgresBar from "../../components/UL/ProgresBar/ProgresBar";
import SizeKlic from "../../components/UL/SizeKlik/SizeKlic";
import ProductColor from "../../components/UL/ProductColor/ProductColorr";


const ProductPageItems=({product}) => {

    function calkProgreesBar() {
        let ninCount=100
        const result=(product.remainder / ninCount) * 100
        return result
    }

    function HendtlCliskSize() {

    }

    return (
        <div className="container ProductPageItems">
            <div className="row">
                <div className="col-sx-6 col-sm-6 col-md-6 col-ld-6 container">
                    <img className="ProductImage" src={product.img} alt={product.name}/>
                </div>
                <div className="col-sx-6 col-sm-6 col-md-6 col-ld-6 container">
                    <div className="ProductPageContainerLikes">
                        <div className='ProductPageName'>{product.name}</ div>
                        <div className='addToWidhListBordeer'>
                            <i className="fa fa-heart addToWidhList"/>
                        </div>
                    </div>
                    <div className="ProductPageContainerPrise">
                        <div className="ProductPageNameNewPrise">${product.newPrise} USD</div>
                        <div className="ProductPageNamePrise">${product.prise} USD</div>
                    </div>
                    <Grade props={product}/>
                    <div className="ProductPageDiscription">{product.discription}</div>
                    <div className="ProductPageSoldLast">
                        <span>{product.remainder}</span> sold in last <span>20</span> Hour
                    </div>
                    <div className="SoldInTwelveHours">HURRY! ONLY <span>{product.SoldInTwelveHours}</span>LEFT IN STOCK
                    </div>
                    <ProgresBar valuePercentage={calkProgreesBar()}/>
                    <div className="ProductPageContainerModal">
                        <div>Size guide</div>
                        <div>Delivery & Return</div>
                        <div>Ask a Question</div>
                    </div>
                    <span className="ProductSizeSize">SIZE</span>
                    <div className="ProductSize">
                        {product.size.map(size =>
                            <SizeKlic key={size} size={size}/>
                        )}
                    </div>
                    <span className="ProductSizeSize">COLOR</span>
                    <div className="ProductSize">
                        {product.color.map(color =>
                            <ProductColor key={color} color={color}/>
                        )}
                    </div>
                    <div>выбор</div>
                    <button>add to cart</button>
                    <button>buy it now</button>
                    <div>Categories :{product.categories}</div>
                </div>
            </div>
            <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
                <div className="row">
                    <div>WORLDWIDE SHIPPING</div>
                    <div>FREE 60-DAY RETURNS</div>
                    <div>24 MONTH WARRANTY</div>
                    <div>100% SECRUE CHECKOUT</div>
                </div>
            </div>
            <HotDell/>
        </div>
    );
};

export default ProductPageItems;
