import React, { useEffect, useState, useMemo, useContext } from "react";
import PostServer from "../../API/PostServer";
import ProductList from "../../components/ProductList/ProductList";
import "./ProductCatalog.css";
import Loader from "../../components/UL/Loader/Loader";
import { useTitle } from "../../hooks/useTitle";
import Mayselect from "../../components/UL/select/MaySelect";
import MayIput from "../../components/UL/MayInput/MayIput";
import { AuthContext } from "../../contex/contex";

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

const ProductCatalog = () => {

  useTitle("Product");

  const [getProduct, setGetProduct] = useState([]);
  const [filter, setFilter] = useState({sort: "", query: ""})

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const getProduct = await PostServer.GetOll();
    setGetProduct(getProduct);
  }

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...getProduct].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return getProduct
    }
  }, [filter.sort, getProduct])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(posts => posts.name.toLocaleUpperCase().includes(filter.query.toLocaleUpperCase()))
  }, [filter.query, sortedPost])


  return (
    <div>
      <div>
        <div className="container bacground_home_product_main">
          <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
            <div className="home_product_container">
              <h2>Products Pag</h2>
                <MayIput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Пошук'
              />
              <Mayselect
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                value={filter.sort}
                defaultValue="Сортировка"
                options={[
                  { value: "discription", name: "по релевантності" },
                  { value: "name", name: "по названию" },
                ]}
              />
              {sortedAndSearchedPosts.length ? (
                <div className="home_product_list">
                  {sortedAndSearchedPosts.map((product, index) => (
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
