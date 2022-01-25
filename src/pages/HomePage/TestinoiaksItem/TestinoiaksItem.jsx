import React from "react";
import "./TestinoiaksItem.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grade from "../UL/Grade/Grade";

const TestinoiaksItem = ({ reviews }) => {

  return (
    <div className="TestinoiaksItemContiner">
      <div className="TestinoiaksItemText">{reviews.text}</div>
        <Grade props={reviews}/>
      <img className="TestinoiaksItemImg" src={reviews.image}></img>
      <div className="TestinoiaksItemName">{reviews.name}</div>
      <div className="TestinoiaksItemPosition">{reviews.position}</div>
    </div>
  );
};

export default TestinoiaksItem;
