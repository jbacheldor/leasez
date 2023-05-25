import { Icon } from "@mui/material";
import React from "react";

interface IconWrapperProps {
    Icon?: any,
    onClick?: () => void,
}

export const IconWrapper:React.FC<IconWrapperProps> = ({Icon, onClick}) => {
    return (
        <div onClick={onClick}>
            {Icon}
        </div>
    );
}