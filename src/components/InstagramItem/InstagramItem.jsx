import React from "react";
import "./InstagramItem.css";

const InstagramItem = ({ inst }) => {
  return (
    <>
      <div>
        <img
          data-value={inst.id}
          className="InstagramItemImg item"
          src={inst.image}
        ></img>
      </div>
    </>
  );
};

export default InstagramItem;
