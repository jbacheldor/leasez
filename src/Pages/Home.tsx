import React from "react";
import { SkinnyCard } from "../Components/SkinnyCard/SkinnyCard";
import "../Components/header.style.css"
import { mockData } from "../mock-data/Cards";
import { FilterBar } from "../Components/Filter-Bar/filterbar.index";

export const Home: React.FC = () => {

    return (
    <div className="Home">
    <FilterBar/>
    <SkinnyCard lease={mockData.SkinnyCardDetailsInput}/>
    </div>
    );
}