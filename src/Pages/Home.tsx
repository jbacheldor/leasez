import React from "react";
import { SkinnyCard } from "../Components/SkinnyCard/SkinnyCard";
import "../Components/header.style.css"
import { mockData } from "../mock-data/Cards";

export const Home: React.FC = () => {

    return (
    <>
    {}
    <SkinnyCard lease={mockData.SkinnyCardDetailsInput}></SkinnyCard>
    <div>"This"</div>
    </>
    );
}