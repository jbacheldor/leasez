import React, { useState } from "react";
import "./pagination.style.css";
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { IconWrapper } from "../filter-wrapper";
import { DropDown } from "./drop-down";
import { IStoreState } from "../../Types";
import { useDispatch, useSelector } from 'react-redux';
import store from "../../store";
import { pageActions } from "../../store/ActionKeys/actionkeys";

const mapStateToProps = (state: IStoreState) => ({
    paginationState: state.paginationState,
  });

export const Pagination:React.FC = () =>{

    const { paginationState } = useSelector(mapStateToProps);
    const { paginationStateReducer } = store.getState().reducers;

    const dispatch = useDispatch(); 

    const [dropDownOpen, setDropDown] = useState(false);

    const handleClick = () => {
        if(dropDownOpen){
            setDropDown(false);
        }
        else {
            setDropDown(true);
        }
    };

    const handleNextPage = () => {
        dispatch({paginationState, type: pageActions.NEXT_PAGE});
    }

    const handleBackPage = () => {
        dispatch({paginationState, type: pageActions.BACK_PAGE});
    }

    const rowOptions = [1, 5, 10, 15];

    return(
        <div className="paginationMain">
            <div className="rowsPerPage">
            Number of Posts:
            {paginationStateReducer.postsPerPage}
            <IconWrapper Icon={<ArrowDropDownRoundedIcon/>} onClick={handleClick}/>
                    <div className="options">
                    {dropDownOpen &&
                        <DropDown props={rowOptions}/>
                    }
                    </div>
            </div>
            <div className="separator"></div>
            <div className="navigation">
            <IconWrapper Icon={<NavigateBeforeRoundedIcon/>} onClick={handleBackPage}/>
            {paginationStateReducer.currentPage}
            <IconWrapper Icon={<NavigateNextRoundedIcon/>} onClick={handleNextPage}/>
            </div>
        </div>
    );
}