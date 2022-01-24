import React from "react";
import "./TestinoiaksItem.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {MdOutlineGrade} from "react-icons/md";

const TestinoiaksItem = ({ reviews }) => {
    console.log(reviews)
  return (
    <div className="TestinoiaksItemContiner">
      <div className="TestinoiaksItemText">{reviews.text}</div>
      <div className="TestinoiaksItemGrade">
        {+reviews.grade === 1 ? (
          <MdOutlineGrade />
        ) : +reviews.grade === 2 ? (
          <div>
            <MdOutlineGrade />
            <MdOutlineGrade />
          </div>
        ) : +reviews.grade === 3 ? (
          <div>
            <MdOutlineGrade />
            <MdOutlineGrade />
            <MdOutlineGrade />
          </div>
        ) : +reviews.grade === 4 ? (
          <div>
            <MdOutlineGrade />
            <MdOutlineGrade />
            <MdOutlineGrade />
            <MdOutlineGrade />
          </div>
        ) : +reviews.grade === 5 ? (
          <div>
            <MdOutlineGrade />
            <MdOutlineGrade />
            <MdOutlineGrade />
            <MdOutlineGrade />
            <MdOutlineGrade />
          </div>
        ) : null}
      </div>
      <img className="TestinoiaksItemImg" src={reviews.image}></img>
      <div className="TestinoiaksItemName">{reviews.name}</div>
      <div className="TestinoiaksItemPosition">{reviews.position}</div>
    </div>
  );
};

export default TestinoiaksItem;
