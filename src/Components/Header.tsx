import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Grid } from "@mui/material";
import "./header.style.css";

interface HeaderProps {
    name: string;
    OnClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({name, OnClick}) => {

    return (     
        <Grid className="headerGrid">
            <div className="menuButton">
            <Button  onClick={OnClick}>
                <MenuIcon/> 
            </Button>
            </div>
            <div className="welcomeBanner">
            <p>Hello {name}</p>
            </div>
        </Grid>
    );
}