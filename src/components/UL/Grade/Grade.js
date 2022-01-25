import React from 'react';
import "./Grade.css"
import {MdOutlineGrade} from "react-icons/md";

const Grade=(props) => {

    return (
        <div className="TestinoiaksItemGrade">
            {+props.props.grade === 0 ?
                <p>No reviews</p> :
                +props.props.grade === 1 ? (
                    <MdOutlineGrade/>
                ) : +props.props.grade === 2 ? (
                    <div>
                        <MdOutlineGrade/>
                        <MdOutlineGrade/>
                    </div>
                ) : +props.props.grade === 3 ? (
                    <div>
                        <MdOutlineGrade/>
                        <MdOutlineGrade/>
                        <MdOutlineGrade/>
                    </div>
                ) : +props.props.grade === 4 ? (
                    <div>
                        <MdOutlineGrade/>
                        <MdOutlineGrade/>
                        <MdOutlineGrade/>
                        <MdOutlineGrade/>
                    </div>
                ) : +props.props.grade === 5 ? (
                    <div>
                        <MdOutlineGrade/>
                        <MdOutlineGrade/>
                        <MdOutlineGrade/>
                        <MdOutlineGrade/>
                        <MdOutlineGrade/>
                    </div>
                ) : null}
        </div>
    );
};

export default Grade;