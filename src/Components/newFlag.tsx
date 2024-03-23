import React from "react";
import "./Filter-Bar/filterbar.style.css";

export const NewFlag:React.FC = () => {

    return (
        <div className="newFlagBox">
            NEW
        </div>
    );
};

export const OnMarketFlag:React.FC = () => {

    return (
        <div className="onMarketFlagBox">
            AVAILABLE
        </div>
    );
};

export const NoFeeFlag:React.FC = () => {
    return (
        <div className="noFeeFlagBox">
            NO FEE
        </div>
    );
};