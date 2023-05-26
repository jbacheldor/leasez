import React, { useState } from "react";
import "./pagination.style.css";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { IconWrapper } from "../filter-wrapper";
import { DropDown } from "./drop-down";

export const Pagination:React.FC = () =>{

    const [dropDownOpen, setDropDown] = useState(false);

    const handleClick = () => {
        console.log(dropDownOpen);
        if(dropDownOpen){
            setDropDown(false);
        }
        else {
            setDropDown(true);
        }
    }

    const rowOptions = [5, 10, 25, 50];

    return(
        <div className="paginationMain">
            <div className="rowsPerPage">
            Number of Rows:
            5
            <IconWrapper Icon={<ArrowDropDownRoundedIcon/>} onClick={handleClick}/>
                    <div className="options">
                    {dropDownOpen &&
                        <DropDown props={rowOptions}/>
                    }
                    </div>
            </div>
            <div className="separator"></div>
            <div className="navigation">
            <IconWrapper Icon={<NavigateBeforeRoundedIcon/>} onClick={() => {console.log("back!")}}/>
            "current page"
            <IconWrapper Icon={<NavigateNextRoundedIcon/>} onClick={() => {console.log("next!")}}/>
            </div>
        </div>
    );
}