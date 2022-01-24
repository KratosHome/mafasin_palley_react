import React from 'react';
import {MdOutlineGrade} from "react-icons/md";

const Grade=(product) => {

    return (
        <div>
            {+product.grade === 1 ? (
                <MdOutlineGrade/>
            ) : +product.grade === 2 ? (
                <div>
                    <MdOutlineGrade/>
                    <MdOutlineGrade/>
                </div>
            ) : +product.grade === 3 ? (
                <div>
                    <MdOutlineGrade/>
                    <MdOutlineGrade/>
                    <MdOutlineGrade/>
                </div>
            ) : +product.grade === 4 ? (
                <div>
                    <MdOutlineGrade/>
                    <MdOutlineGrade/>
                    <MdOutlineGrade/>
                    <MdOutlineGrade/>
                </div>
            ) : +product.grade === 5 ? (
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