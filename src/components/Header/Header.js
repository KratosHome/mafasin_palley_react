import React, { useState } from "react";
import "./Header.css";
import Menu from "./Menu/Menu";
import logo from "../../img/icons/logo.png";
import search from "../../img/icons/search.png";
import personal_area from "../../img/icons/personal_area.png";
import like from "../../img/icons/like.png";
import cart from "../../img/icons/cart.png";
import { Link } from "react-router-dom";
import PersonalAreaModal from "../modal/PersonalArea/PersonalAreaModal";
import CartHeader from "../CartHeader/CartHeader";
import WOW from "wow.js"

const Header = () => {

  return (
    <>
      <header>
        <div className="container">
          <div className="row test">
            <div className="container">
              <div className="col-sx-12 col-sm-12 col-md-2 col-ld-2">
                <div className="row test">
                  <Link className="logo" to="/">
                    <img className="logo" src={logo} alt="Palley" />
                  </Link>
                </div>
              </div>
            </div>
            <Menu />
            <div className="col-sx-4 col-sm-4 col-md-4 col-ld-4">
              <div className="navigator">
                <div className="search">
                  <Link to="/search">
                    <img src={search} alt="search" />
                  </Link>
                </div>
                <PersonalAreaModal />
                <div className="likes">
                  <Link to="/likes">
                    <img src={like} alt="like" />
                  </Link>
                </div>
                <CartHeader />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
