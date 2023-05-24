import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";
import "./header.style.css";
import { Navigation } from "./Navigation";

interface HeaderProps {
    name: string;
    OnClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({name, OnClick}) => {

    return (     
        <div className="headerGrid">
            <div className="menuButton">
            <Button  onClick={OnClick}>
                <MenuIcon/> 
            </Button>
            <p>Hello {name}</p>
            </div>
        </div>
    );
}