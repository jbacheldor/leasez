import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React from 'react';
import "./filterbar.style.css";

export const SearchBar = () => {

    return (
        <div className='searchBar'>
            <div className='searchIcon'>
            <SearchRoundedIcon/>
            </div>
            <input className='searchBox'/>
        </div>
    );
}