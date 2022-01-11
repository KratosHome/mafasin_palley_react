import React, { useState } from "react";
import "./TestinoiaksItem.css";
import test from "../../img/baner/slide-3.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestinoiaksItem = ({ reviews }) => {
  return (
    <div className="TestinoiaksItemContiner">
      <div> {reviews.text}</div>
      <div>{reviews.grade}</div>
      <img className="vla" src={reviews.image}></img>
      <div>{reviews.name}</div>
      <div>{reviews.position}</div>
    </div>
  );
};
export default TestinoiaksItem;
