import "./card.style.css";
import React from "react";
import { LeaseBase, SkinnyCardDetailsInput } from "../../Types/skinnycard";

export const SkinnyCard: React.FC<SkinnyCardDetailsInput> = ({ lease }) => {
    return (
        <>
        {lease.map(
            ({location, price, beds}, index) => (
        <div className="skinnycard">
            <div className ="cardGrid">
                <div className="img">
                "Content"
                </div>
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