import React from "react";
import "./ProductPage.css";
import HotDell from "../HomePage/HotDell/HotDell";
import Grade from "../../components/UL/Grade/Grade";

const ProductPageItems=({product}) => {
  return (
      <div className="container ProductPageItems">
        <div className="row">
          <div className="col-sx-6 col-sm-6 col-md-6 col-ld-6 container">
            <img className="ProductImage" src={product.img} alt={product.name}/>
          </div>
          <div className="col-sx-6 col-sm-6 col-md-6 col-ld-6 container">
            <div className="ProductPageContainerLikes">
              <div className='ProductPageName'>{product.name}</div>
              <div className='addToWidhListBordeer'>
                <i className="fa fa-heart addToWidhList"/>
              </div>
            </div>
            <div className="ProductPageContainerPrise">
              <div className="ProductPageNameNewPrise">${product.newPrise} USD</div>
              <div className="ProductPageNamePrise">${product.prise} USD</div>
            </div>
            <div>
              <Grade product={product}/>
            </div>
            <div>{product.grade}</div>
            <div>{product.discription}</div>
            <div>30 sold in last 20 Hour</div>
            <div>HURRY! ONLY 49 LEFT IN STOCK</div>
            <div>Size guide</div>
            <div>Delivery & Return</div>
            <div>Ask a Question</div>
            <div>{product.count}</div>
            <div>{product.size}</div>
            <div>{product.color}</div>
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
