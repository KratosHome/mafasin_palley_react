import React from "react";
import "./Footer.css";
import logo from "../../img/icons/logo.png";
import visa from "../../img/icons/pay_copyright.png";
import { Link } from "react-router-dom";
import WOW from "wow.js"

const Footer = () => {
  new WOW().init()
  return (
    <footer className="wow animate__animated animate__backInUp">
      <div className="col-sx-12 col-sm-12 col-md-12 col-ld-12 ">
        <div className="footerContainer">
          <div className="footerBlok1">
            <img className="logo" src={logo} alt="Palley" />
            <form>
              <div className="footerSubscribe">
                Subscribe our newsletter and get discount 30% off
              </div>
              <input
                className="footerSubscribeInput"
                placeholder="Your email address..."
              />
              <svg
                className="footerSubscribeSVG"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
              >
                <path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"></path>
                <path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"></path>
              </svg>
            </form>
            <div className="socialNetwork">
              <a
                className="tvitera"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter colerSocialNet"></i>
              </a>
              <a
                className="tvitera"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram colerSocialNet"></i>
              </a>
              <a
                className="tvitera"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-bitcoin colerSocialNet"></i>
              </a>
              <a
                className="tvitera"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-apple-pay colerSocialNet"></i>
              </a>
            </div>
          </div>
          <div className="footerBlok2">
            <h6>Customer Care</h6>
            <Link to="/pagination">Pagination</Link>
            <Link to="/terms_Conditions">Terms & Conditions</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/">Term of use</Link>
          </div>
          <div className="footerBlok3">
            <h6>Quick Shop</h6>
            <Link to="/about_us">About Us</Link>
            <Link to="/Privacy_Policy">Privacy Policy</Link>
            <Link to="/Terms_Conditions">Terms & Conditions</Link>
            <Link to="/Products_Return">Products Return</Link>
            <Link to="/Wholesale_Policy">Wholesale Policy</Link>
          </div>
          <div className="footerBlok4">
            <h6>Company</h6>
            <Link to="/help_center">Help Center</Link>
            <Link to="/address_store">Address Store</Link>
            <Link to="/privacy_policy">Privacy Policy</Link>
            <Link to="/receivers_amplifiers">Receivers & Amplifiers</Link>
            <Link to="/palleyStore">PalleyStore</Link>
          </div>
        </div>
      </div>

      <div className="footerBlok5">
        <div>
          © Copyright 2021 | PalleyStore By
          <a className="tvitera" href="http://shopilaunch.com/" target="_blank" rel="noreferrer" >
            {" "}
            ShopiLaunch.
          </a>{" "}
          Powered by Shopify.
        </div>
        <div>
          <img className="footerBlokVisa" src={visa} alt="Palley" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
