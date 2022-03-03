import React, { useEffect, useState } from "react";
import PostServer from "../../API/PostServer";
import ProductList from "../../components/ProductList/ProductList";
import "./ProductCatalog.css";
import Loader from "../../components/UL/Loader/Loader";
import { useTitle } from "../../hooks/useTitle";
import Mayselect from "../../components/UL/select/MaySelect";
import Select from 'react-select';


const ProductCatalog = () => {
  useTitle("Product");

  const [getProduct, setGetProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const getProduct = await PostServer.GetOll();
    setGetProduct(getProduct);
  }

  const [selectedSort, setSelectedSort] = useState("")

  const sortProduct = (sort) => {
    setSelectedSort(sort)
    setGetProduct([...getProduct].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

/*
  const sortProductTwo = () => {
    if (options[0].value) {
      setGetProduct(getProduct)
    } else if (options[1].value) {
      setGetProduct(getProduct.filter(item => {
        if (item.newPrise === 15) {
          return true
        }
      }))
    } else if (options[2].value) {
      setGetProduct(getProduct.filter(item => {
        if (item.newPrise === 25) {
          return true
        }
      }))
    }
  }
*/
  console.log(getProduct)

  return (
    <div>
      <div>
        <div className="container bacground_home_product_main">
          <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
            <div className="home_product_container">
              <h2>Products Pag</h2>
              <Mayselect
                onChange={sortProduct}
                value={selectedSort}
                defaultValue="Сортировка"
                options={[
                  { value: "name2", name: "по релевантності" },
                  { value: "name", name: "по названию" },
                ]}
              />
              {getProduct.length ? (
                <div className="home_product_list">
                  {getProduct.map((product, index) => (
                    <ProductList key={index} product={product} />
                  ))}
                </div>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
