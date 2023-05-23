import React, { useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./header.style.css";


export const Navigation: React.FC = () => {
    const navigate = useNavigate();

    const options = [{Link: "Home", Icon: {HomeOutlinedIcon}},{Link: "Archive", Icon: {TurnedInNotOutlinedIcon}}, {Link: "Compare", Icon: {CompareArrowsOutlinedIcon}}];


    const handleNavigation = () => {
        navigate('/Home');
    }

    return (     
        <div className="grid">
            {options.map(item => 
                <div className="items"> 
                {/* <{item.Icon}/> */}
                <Button className="listButton" onClick={handleNavigation}> 
                {item.Link}
                </Button>
                </div>)}
        </div>
    );
}