import React from 'react';
import "./ProgresBar.css"

type
ProgressBarProps={
    valuePercentage: number;
};


const ProgresBar=(props: ProgressBarProps) => {
    const {valuePercentage: value}=props;
    const fillerRelativePercentage=(100 / value) * 100;

    return (
        <div className="wrapper">
            <div className="barContainer">
                <div className="filler" style={{width: `${value}%`}}>
                    <div
                        className="fillerBackground"
                        style={{width: `${fillerRelativePercentage}%`}}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgresBar;