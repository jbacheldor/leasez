import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { Link, useNavigate } from "react-router-dom";
import "./header.style.css";
import { Box } from "@mui/material";

export const Navigation: React.FC = () => {
    // const navigate = useNavigate();

    const options = [{Link: "Home", Icon: {HomeOutlinedIcon}},{Link: "Archive", Icon: {TurnedInNotOutlinedIcon}}, {Link: "Compare", Icon: {CompareArrowsOutlinedIcon}}];

    return (     
        <Box>
        <div className="grid">
            {options.map((item, key) => 
                <div className="items" key={key}> 
                <Link to = {item.Link}>
                {item.Link} 
                </Link>
                </div>)}
        </div>
        </Box>
    );
}