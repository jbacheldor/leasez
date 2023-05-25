import React, { useState } from "react";
import { SkinnyCard } from "../Components/SkinnyCard/SkinnyCard";
import "../Components/header.style.css"
import { mockData } from "../mock-data/Cards";
import { FilterBar } from "../Components/Filter-Bar/filterbar.index";
import { SquareCard } from "../Components/SquareCard/sqaurecard.index";
import { CardViewContext } from "../Contexts/cardViewContext";

export const Home: React.FC = () => {
    // include global state & provider here that checks what is selected
    // if it's square then present square - if not then show skinny
    // const [isSquareView, setView] = useState(false);
    const {cardViewGlobalSkinny} = React.useContext(CardViewContext);


    return (
        <div className="Home">
        <FilterBar/>
        {!cardViewGlobalSkinny && 
            <SquareCard lease={mockData.SkinnyCardDetailsInput}/>
        }
        {cardViewGlobalSkinny &&
            <SkinnyCard lease={mockData.SkinnyCardDetailsInput}/>
        }
        </div>
    );
}