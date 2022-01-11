import React from "react";
import "./TestinoiaksSlider.css";
import Slider from "@farbenmeer/react-spring-slider";
import TestinoiaksItem from "../TestinoiaksItem/TestinoiaksItem";

const TestinoiaksSlider = ({ reviews }) => {
  console.log(reviews);
  const onSlideChange = (index) => console.log(`changed to slide ${index}`);
  const setSlideCustom = () => 0;

  const BulletComponent = ({ onClick, isActive }) => (
    <li
      style={{
        width: "25px",
        height: "25px",
        backgroundColor: "red",
        margin: "0 2px",
        opacity: isActive && "0.5",
      }}
      onClick={onClick}
    />
  );

  const ArrowComponent = ({ onClick, direction }) => {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "1em",
          backgroundColor: "white",
        }}
        onClick={onClick}
      >
        {direction}
      </div>
    );
  };

  return (
    <Slider
      slidesToSlide={1}
      activeIndex={1}
      slidesAtOnce={1}
      auto={1}
      hasBullets
      BulletComponent={BulletComponent}
      ArrowComponent={ArrowComponent}
      onSlideChange={onSlideChange}
      setSlideCustom={setSlideCustom}
    >
      <div>bvfd</div>
      <div>sfvdf</div>
      <div>sfvdf</div>
      <div>sfvdf</div>
    </Slider>
  );
};
export default TestinoiaksSlider;
