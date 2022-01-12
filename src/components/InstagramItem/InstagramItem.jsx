import React from "react";
import "./InstagramItem.css";

const InstagramItem = ({ inst }) => {
  return (
    <>
      <div>
        <img className="InstagramItemImg" src={inst.image}></img>
      </div>
    </>
  );
};

export default InstagramItem;
