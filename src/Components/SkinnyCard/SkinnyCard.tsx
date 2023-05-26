import "./card.style.css";
import React, { useState } from "react";
import { SkinnyCardDetailsInput } from "../../Types/skinnycard";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { NewFlag } from "../newFlag";
import { IconWrapper } from "../filter-wrapper";

export const SkinnyCard: React.FC<SkinnyCardDetailsInput> = ({ lease }) => {
    const [isFavorite, setFavorite] = useState(false);

    const handleFavorite = (fave: boolean) => {
        if(fave === true){
            setFavorite(false);
        }
        else {
            setFavorite(true);
        }
    }
   
    return (
        <div className="card">        
        {lease.map(
            ({location, price, beds, isNew, favorite}, index) => (
        <div className="skinnycard" key={index}>
            <div className="flagPosition">
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
            </div>
            <div className="heartlocation">
                {isFavorite === favorite &&
                    <IconWrapper Icon={<FavoriteRoundedIcon/>} onClick={() => {handleFavorite(favorite)}}/>}
                {!isFavorite === favorite &&
                    <IconWrapper Icon={<FavoriteBorderRoundedIcon/>} onClick={()=> {handleFavorite(favorite)}}/>}
            </div>
        </div>
    ),)}
        </div>
    )

}