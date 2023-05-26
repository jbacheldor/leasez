import "./filterbar.style.css";
import React, { useContext, useState } from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { SearchBar } from "./search-box";
import { IconWrapper } from "../filter-wrapper";
import { CardViewContext } from "../../store/Contexts/cardViewContext";

export const FilterBar:React.FC = () => {
    const [isFilterOpen, setFilterOpen] = useState(false);

    const filters = ["AVAILABLE", "NEW"];

    const handleFilterOpen = () => {
        if(isFilterOpen) {
            setFilterOpen(false);
        }
        else {
            setFilterOpen(true);
        }
    }

    const {cardViewGlobalSkinny, setCardViewGlobalSkinny} = React.useContext(CardViewContext);

    const changeCardView = () => {
        if(cardViewGlobalSkinny){
            setCardViewGlobalSkinny(false);
        }
        else {
            setCardViewGlobalSkinny(true);
        }
    }
    

    return (
        <div className="filterBar">
         <div className="mainBar"> 
         <IconWrapper Icon={<FilterAltRoundedIcon/>} onClick={handleFilterOpen}/>
         <IconWrapper Icon={<GridViewOutlinedIcon/>} onClick={changeCardView}/>
        </div>
            {isFilterOpen && (        
            <div className="searchBarGrid">
            <SearchBar/>
            {/* figure out how you want to do filters  */}
            {/* {filters.map ((val) => (
                    <div>{val}</div>
                )
            )} */}
            </div>)}
        </div>
    )

}