import "./filterbar.style.css";
import React from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';

export const FilterBar:React.FC = () => {

    return (
        <div className="searchBarGrid">
            <SearchRoundedIcon/>
            <FilterAltRoundedIcon/>
        </div>
    )

}