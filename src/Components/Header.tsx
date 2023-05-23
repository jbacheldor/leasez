import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./header.style.css";
import { Navigation } from "./Navigation";

interface HeaderProps {
    name: string;
}

export const Header: React.FC<HeaderProps> = ({name}) => {

    const [navOpen, setNav] = useState(false);

    const isOpen = () => {
        if(navOpen === true){
            setNav(false);
        }
        else {
            setNav(true);
        }
    }

    return (     
        <div className="headerGrid">
            <div className="menuButton">
            <Button  onClick={isOpen}>
                <MenuIcon/> 
            </Button>
            <p>Hello {name}</p>
            </div>
            {navOpen === true && 
            <div>
                <Navigation/>
            </div>
            }
        </div>
    );
}