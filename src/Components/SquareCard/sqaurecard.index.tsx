import React, { useState } from "react";
import { NewFlag } from "../newFlag";
import { SkinnyCardDetailsInput } from "../../Types/skinnycard";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import "./squarecard.style.css";
import { IconWrapper } from "../filter-wrapper";

export const SquareCard:React.FC<SkinnyCardDetailsInput> = ({ lease }) => {

    return (
        <div className="cardGrids">        
        {lease.map(
            ({location, price, beds, isNew, favorite}, index) => (
        <div className="squarecard" key={index}>
            <div className="flagPositionSquare">
            {isNew && (
                <NewFlag/>
            )}
            </div>
            <div className ="cardGrid">
                <img className="leasePicture" src="https://imgjapan.com/wp-content/uploads/2023/03/Kakao-logo-800x800-1.png" />
                <div className="data">
                        <div>
                            <div>{location}</div>
                            <div>{price}</div>
                            <div>{beds}</div>
                        </div>
                </div>
                <div className="heartlocation">
                {favorite &&
                    <IconWrapper Icon={<FavoriteRoundedIcon/>} onClick={() => {console.log("unfavorited!")}}/>}
                {!favorite &&
                    <IconWrapper Icon={<FavoriteBorderRoundedIcon/>} onClick={()=> {console.log("favorited!")}}/>}
            </div>
            </div>
        </div>
    ),)}
        </div>
    );
}