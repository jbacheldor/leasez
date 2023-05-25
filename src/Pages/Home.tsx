import React, { useState } from "react";
import { SkinnyCard } from "../Components/SkinnyCard/SkinnyCard";
import "../Components/header.style.css"
import { mockData } from "../mock-data/Cards";
import { FilterBar } from "../Components/Filter-Bar/filterbar.index";
import { SquareCard } from "../Components/SquareCard/sqaurecard.index";

export const Home: React.FC = () => {
    // include global state & provider here that checks what is selected
    // if it's square then present square - if not then show skinny
    const [isSquareView, setView] = useState(false);

    return (
    <div className="Home">
    <FilterBar/>
    {!isSquareView && 
        <SquareCard lease={mockData.SkinnyCardDetailsInput}/>
    }
    {isSquareView &&
        <SkinnyCard lease={mockData.SkinnyCardDetailsInput}/>
    }
    </div>
    );
}