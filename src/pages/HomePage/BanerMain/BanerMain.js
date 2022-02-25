import React from "react";
import "./BanerMain.css";
import 'animate.css';
import WOW from "wow.js"

const BanerMain = () => {
  new WOW().init()
  return (
    <>
      <div className="BanerMain_img wow animate__animated animate__backInLeft">
        <div className="BanerMain_block wow animate__animated animate__backInRight">
          <h3 className="BanerMain_h3">POUCH WITH POCKET</h3>
          <div className="BanerMain_text">
            Forsake bulky cases without compromising protectiveness
          </div>
          <button className="BanerMain_button">show now</button>
        </div>
      </div>
    </>
  );
};

export default BanerMain;
