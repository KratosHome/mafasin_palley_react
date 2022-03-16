import React, { useEffect, useState, useMemo } from "react";
import PostServer from "../../API/PostServer";
import ProductList from "../../components/ProductList/ProductList";
import "./ProductCatalog.css";
import Loader from "../../components/UL/Loader/Loader";
import { useTitle } from "../../hooks/useTitle";
import Mayselect from "../../components/UL/select/MaySelect";
import MayIput from "../../components/UL/MayInput/MayIput";
import Filretproductleft from "../../components/FilretProductLeft/FilretProductLeft";
import Serchbar from "../../components/SerchBar/SerchBar";
import SearchProducr from "../../components/SearchProducr/SearchProducr";
import { brandList, categoryList } from "../../constants/constants";


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

  const [productList, setProductList] = useState(getProduct)

  // filter brends
  const [brands, setBrands] = useState(brandList)

  const handleChangeCheckedBrends = id => {
    const brandStateList = brands
    const changeCheckedBrands = brandStateList.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setBrands(changeCheckedBrands)
  }

  const [category, setCatefory] = useState(categoryList)

  const handleChangeCheckedCategory = id => {
    const brandStateList = category
    const changeCheckedBrands = brandStateList.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setCatefory(changeCheckedBrands)
  }

  // Selecded Prise

  const [selectedPrice, setSelectedPrice] = useState([5, 25])

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value)
  }


  const applyFilters = () => {
    let updateList = getProduct

    // Filter brend
    const filterChecked = brands
      .filter((item) => item.checked)
      .map((item) => item.lable.toLowerCase());

    if (filterChecked.length) {
      updateList = updateList.filter((item) =>
        filterChecked.includes(item.BrandName.toLowerCase())
      )
    }

    // Filter category
    const filterCategoryChecked = category
      .filter((item) => item.checked)
      .map((item) => item.value);

    if (filterCategoryChecked.length) {
      updateList = updateList.filter((item) =>
        item.categories.some(i => i.includes(filterCategoryChecked))
      )
    }

    // Filter Prise
    const minPrise = selectedPrice[0]
    const maxPrise = selectedPrice[1]

    updateList = updateList.filter(
      (item) => item.newPrise >= minPrise && item.newPrise <= maxPrise
    )

    setProductList(updateList)
  }



  useEffect(() => {
    applyFilters()
  }, [
    brands,
    getProduct,
    category,
    selectedPrice
  ])



  return (
    <div>
      <div>
        <div className="container bacground_home_product_main">
          <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12">
            <div className="home_product_container">
              <h2>Products Pag </h2>
            </div>

            <SearchProducr />
            <div className="FilterProductContainer">
              <Serchbar
                brands={brands}
                category={category}
                changeChecked={handleChangeCheckedBrends}
                handleChangeCheckedCategory={handleChangeCheckedCategory}
                selectedPrice={selectedPrice}
                changePrice={handleChangePrice}
              />
              {productList.length ? (
                <div className="home_product_list">
                  {productList.map((product, index) => (
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
