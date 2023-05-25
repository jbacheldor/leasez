import "./card.style.css";
import React from "react";
import { SkinnyCardDetailsInput } from "../../Types/skinnycard";
import { NewFlag } from "../newFlag";

export const SkinnyCard: React.FC<SkinnyCardDetailsInput> = ({ lease }) => {
    return (
        <div className="card">        
        {lease.map(
            ({location, price, beds, isNew}, index) => (
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
        </div>
    ),)}
        </div>
    )

}