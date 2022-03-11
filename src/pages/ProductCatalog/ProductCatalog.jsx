import React, { useEffect, useState, useMemo } from "react";
import PostServer from "../../API/PostServer";
import ProductList from "../../components/ProductList/ProductList";
import "./ProductCatalog.css";
import Loader from "../../components/UL/Loader/Loader";
import { useTitle } from "../../hooks/useTitle";
import Mayselect from "../../components/UL/select/MaySelect";
import MayIput from "../../components/UL/MayInput/MayIput";
import Filretproductleft from "../../components/FilretProductLeft/FilretProductLeft";


const ProductCatalog = () => {

  useTitle("Product");

  const [getProduct, setGetProduct] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" })


  const [selectValue, setSelectValue] = useState(["Oll Pages", "Home Page", "Best seller", "Hot deal"])
  console.log(setSelectValue)
  const [selectProduct, setSlectProduct] = useState("Oll Pages")

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const getProduct = await PostServer.GetOll();
    setGetProduct(getProduct);
  }

  const [filterBrands, setFilterBrands] = useState("")
  console.log(setFilterBrands)

  const result = getProduct.filter(get => {
    if (get.categories[0] === selectProduct) {
      return true
    } else if (get.categories[1] === selectProduct) {
      return true
    } else if (get.categories[2] === selectProduct) {
      return true
    } else if (get.categories[3] === selectProduct) {
      return true
    } else if (get.categories[4] === selectProduct) {
      return true
    } else if (get.name === selectProduct) {
      return true
    } else if (get.name !== selectProduct) {
      return getProduct
    } else {
      return false
    }
  })



  const FilterBrends = getProduct.filter(get => {
    if (get.name === filterBrands) {
      return true
    } else if (get.name === "Oll Pages"){
      return true
    }
  })

  console.log(FilterBrends)

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...getProduct].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else if (result) {
      return result
    } else if (FilterBrends) {
      return FilterBrends
    } else {
      return getProduct
    }
  }, [filter.sort, getProduct, result, FilterBrends])



  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(posts => posts.name.toLocaleUpperCase().includes(filter.query.toLocaleUpperCase()))
  }, [filter.query, sortedPost])

  return (
    <div>
      <div>
        <div className="container bacground_home_product_main">
          <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
            <div className="home_product_container">
              <h2>Products Pag </h2>
            </div>
            <select
              value={selectProduct}
              onChange={e => setSlectProduct(e.target.value)}
            >
              {selectValue.map(opti =>
                <option key={opti} value={opti} >
                  {opti}
                </option>
              )}
            </select>
            <MayIput
              value={filter.query}
              onChange={e => setFilter({ ...filter, query: e.target.value })}
              placeholder='Пошук'
            />
            <Mayselect
              onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
              value={filter.sort}
              defaultValue="Сортировка"
              options={[
                { value: "discription", name: "по релевантності" },
                { value: "name", name: "по названию" },
              ]}
            />
            <div className="FilterProductContainer">
              <Filretproductleft
                setSlectProduct={setSlectProduct}
                getProduct={sortedAndSearchedPosts}
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
