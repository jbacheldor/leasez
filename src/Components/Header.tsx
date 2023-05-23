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

    // const [navOpen, setNav] = useState(false);

    // const isOpen = () => {
    //     if(navOpen === true){
    //         setNav(false);
    //     }
    //     else {
    //         setNav(true);
    //     }
    // }

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