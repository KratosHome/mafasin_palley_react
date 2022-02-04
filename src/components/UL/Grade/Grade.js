import React from "react";
import "./Grade.css";
import { MdOutlineGrade } from "react-icons/md";

const Grade = ({ grade }) => {
  return (
    <div className="TestinoiaksItemGrade">
      {+grade === 0 ? (
        <p>No reviews</p>
      ) : +grade === 1 ? (
        <MdOutlineGrade />
      ) : +grade === 2 ? (
        <div>
          <MdOutlineGrade />
          <MdOutlineGrade />
        </div>
      ) : +grade === 3 ? (
        <div>
          <MdOutlineGrade />
          <MdOutlineGrade />
          <MdOutlineGrade />
        </div>
      ) : +grade === 4 ? (
        <div>
          <MdOutlineGrade />
          <MdOutlineGrade />
          <MdOutlineGrade />
          <MdOutlineGrade />
        </div>
      ) : +grade === 5 ? (
        <div>
          <MdOutlineGrade />
          <MdOutlineGrade />
          <MdOutlineGrade />
          <MdOutlineGrade />
          <MdOutlineGrade />
        </div>
      ) : null}
    </div>
  );
};

export default Grade;
