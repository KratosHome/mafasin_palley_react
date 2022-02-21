import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import HotDell from "../HomePage/HotDell/HotDell";
import Grade from "../../components/UL/Grade/Grade";
import ProgresBar from "../../components/UL/ProgresBar/ProgresBar";
import SizeKlic from "../../components/UL/SizeKlik/SizeKlic";
import ProductColor from "../../components/UL/ProductColor/ProductColorr";
import ProductCount from "../../components/UL/ProductCount/ProductCount";
import ButtonAddToCart from "../../components/UL/ButtonAddToCart/ButtonAddToCart";
import BayItNow from "../../components/UL/BayItNow/BayItNow";
import ProductCategori from "../../components/UL/ProductCategori/ProductCategori";
import ProductImg from "../../components/UL/ProductImg/ProductImg";
import ProductTabs from "./ProductTabs/ProductTabs";
import { useTitle } from "../../hooks/useTitle";
import { CSSTransition } from "react-transition-group";


const ProductPageItems = ({ product }) => {
  const [count, setCount] = useState(1);

  const minCount = 1;

  function ProductIncriment(e) {
    e.preventDefault();
    setCount(count + 1);
  }

  function ProducttDecrement(e) {
    e.preventDefault();
    setCount(count - 1);
  }

  function calkProgreesBar() {
    let ninCount = 100;
    const result = (product.remainder / ninCount) * 100;
    return result;
  }

  useTitle(product.name, product.img);


  return (
    <>
        <div className="container ProductPageItems">
          <div className="row">
            <div className="col-sx-12 col-sm-7 col-md-7 col-ld-7 container">
              <ProductImg img={product.cart_img} />
            </div>
            <div className="col-sx-12 col-sm-5 col-md-5 col-ld-5 container">
              <div className="ProductPageContainerLikes">
                <div className="ProductPageName">{product.name}</div>
                <div className="addToWidhListBordeer">
                  <i className="fa fa-heart addToWidhList" />
                </div>
              </div>
              <div className="ProductPageContainerPrise">
                <div className="ProductPageNameNewPrise">
                  ${product.newPrise} USD
                </div>
                <div className="ProductPageNamePrise">${product.prise} USD</div>
              </div>
              <Grade grade={product.grade} />
              <div className="ProductPageDiscription">{product.discription}</div>
              <div className="ProductPageSoldLast">
                <span>{product.SoldInTwelveHours}</span> sold in last{" "}
                <span>20</span> Hour
              </div>
              <div className="SoldInTwelveHours">
                HURRY! ONLY <span>{product.remainder}</span>LEFT IN STOCK
              </div>
              <ProgresBar valuePercentage={calkProgreesBar()} />
              <div className="ProductPageContainerModal">
                <div>Size guide</div>
                <div>Delivery & Return</div>
                <div>Ask a Question</div>
              </div>
              {product.size.length > 1 ? (
                <>
                  <span className="ProductSizeSize">SIZE</span>
                  <div className="ProductSize">
                    {product.size.map((size) => (
                      <SizeKlic key={size} size={size} />
                    ))}
                  </div>
                </>
              ) : null}
              {product.color.length > 1 ? (
                <>
                  <span className="ProductSizeSize">COLOR</span>
                  <div className="ProductSize">
                    {product.color.map((color) => (
                      <ProductColor key={color} color={color} />
                    ))}
                  </div>
                </>
              ) : null}
              <div>
                {product.remainder > 1 ? (
                  <>
                    <div className="ProdCounBTN">
                      <ProductCount
                        count={count}
                        maxCount={product.remainder}
                        minCount={minCount}
                        ProductIncriment={ProductIncriment}
                        ProducttDecrement={ProducttDecrement}
                      />
                      <ButtonAddToCart id={product.id} count={count} />
                    </div>
                    <BayItNow />
                  </>
                ) : (
                  <>
                    <div className="NotAvailable">Not available</div>
                    <button>Notify me when</button>
                  </>
                )}
              </div>
              <div className="ProductCategori">
                Categories:{" "}
                {product.categories.map((category) => (
                  <ProductCategori product={category} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
            <div className="row ProductInfoFlex">
              <div className="ProductInfo">
                <img src="../../img/icons/product_icon1.png" alt="ff" />
                <span>WORLDWIDE SHIPPING</span>
              </div>
              <div className="ProductInfo">
                <img src="../../img/icons/product_icon2.png" alt="ff" />
                <span>FREE 60-DAY RETURNS</span>
              </div>
              <div className="ProductInfo">
                <img src="../../img/icons/product_icon3.png" alt="ff" />
                <span>24 MONTH WARRANTY</span>
              </div>
              <div className="ProductInfo">
                <img src="../../img/icons/product_icon4.png" alt="ff" />
                <span>100% SECRUE CHECKOUT</span>
              </div>
            </div>
          </div>
        </div>
        <ProductTabs
          discription={product.discription}
          brand={product.BRAND}
          productDiteils={product.PRODUCT_DETAILS}
          sizeFit={product.SIZE_FIT}
          aboutMe={product.ABOUT_ME}
          img={product.img}
          review={product.REVIEW}
        />
        <HotDell />
    </>
  );
};

export default ProductPageItems;
