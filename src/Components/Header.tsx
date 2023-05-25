import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Grid } from "@mui/material";
import "./header.style.css";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

interface HeaderProps {
    name: string;
    OnClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({name, OnClick}) => {
    const [isLoggedIn, setLogin] = useState(false);
    // need to put in props for login and logout provider context

    return (     
        <Grid className="headerGrid">
            <div className="menuButton">
            <Button  onClick={OnClick}>
                <MenuIcon/> 
            </Button>
            </div>
            <div className="welcomeBanner">
            Welcome {name}
            </div>
            <div className="logInButtons">
            {isLoggedIn &&             
                <div>
                    <LogoutIcon/>
                </div>}
            {!isLoggedIn &&
                <div>
                    <LoginIcon/>
                </div>
            }
            </div>
        </Grid>
    );
}