import React from "react";
import "./InstagramItem.css";

const InstagramItem = ({ inst }) => {
  return (
    <>
      <div className="HoverImg">
        <img
          data-value={inst.id}
          className="InstagramItemImg item"
          src={inst.image}
          alt={inst.id}
        />
        <div className="HoverImgTwo"></div>
        <div className="HoverImgThre"></div>
      </div>
    </>
  );
};

export default InstagramItem;
