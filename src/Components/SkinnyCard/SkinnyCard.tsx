import "./card.style.css";
import React from "react";
import { SkinnyCardDetailsInput } from "../../Types/skinnycard";

export const SkinnyCard: React.FC<SkinnyCardDetailsInput> = ({ lease }) => {
    return (
        <>
        {lease.map(
            ({location, price, beds}, index) => (
        <div className="skinnycard">
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
        </>
    )

}