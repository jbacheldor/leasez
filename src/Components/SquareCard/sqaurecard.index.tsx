import React, { useState } from "react";
import { NewFlag, OnMarketFlag } from "../newFlag";
import { SkinnyCardDetailsInput } from "../../Types/skinnycard";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import "./squarecard.style.css";
import { IconWrapper } from "../filter-wrapper";

export const SquareCard:React.FC<SkinnyCardDetailsInput> = ({ lease }) => {

    return (
        <div className="cardGrids">        
        {lease.map(
            ({location, price, beds, isNew, favorite, onMarket}, index) => (
        <div className="squarecard" key={index}>
            <div className="flagPositionSquare">
            <div className="newFlagSq">
            {isNew && (
                <NewFlag/>
            )}
            </div>
            <div className="onMarketFlagSq">
            {onMarket && (
                <OnMarketFlag/>
            )}
            </div>
            </div>
            <div className ="cardGridSq">
                <img className="leasePicture" src="https://imgjapan.com/wp-content/uploads/2023/03/Kakao-logo-800x800-1.png" />
                <div className="data">
                        <div>
                            <div>{location}</div>
                            <div>{price}</div>
                            <div>{beds}</div>
                        </div>
                </div>
                <IconWrapper Icon={<BookmarkBorderRoundedIcon/>} onClick={()=> {console.log("move to archive!")}}/>
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