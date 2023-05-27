import "./card.style.css";
import React from "react";
import { SkinnyCardDetailsInput } from "../../Types/skinnycard";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { NewFlag, OnMarketFlag } from "../newFlag";
import { IconWrapper } from "../filter-wrapper";
import { IStoreState } from "../../Types";
import { useSelector } from "react-redux";
import store from "../../store";

const mapStateToProps = (state: IStoreState) => ({
    paginationState: state.paginationState,
  });

export const SkinnyCard: React.FC<SkinnyCardDetailsInput> = ({ lease }) => {
   
    const { paginationState } = useSelector(mapStateToProps);
    const { paginationStateReducer} = store.getState().reducers;

    const beginningPost = paginationStateReducer.postsPerPage * paginationStateReducer.currentPage - 1;
    const endPost = beginningPost + paginationStateReducer.postsPerPage;

    return (
        <div className="card">        
        {lease.slice(beginningPost, endPost).map(
            ({location, price, beds, isNew, favorite, onMarket}, index) => (
        <div className="skinnycard" key={index}>
            <div className="flagPosition">
            {onMarket &&
                <OnMarketFlag/>
            }
            {isNew && (
                <NewFlag/>
            )}
            </div>
            <div className ="cardGridSk">
                <img className="leasePicture" src="https://imgjapan.com/wp-content/uploads/2023/03/Kakao-logo-800x800-1.png" />
                <div className="data">
                        <div>
                            <div>{location}</div>
                            <div>{price}</div>
                            <div>{beds}</div>
                        </div>
                </div>
            </div>
            <div className="heartlocation">
                <div className="archiveButton">
                <IconWrapper Icon={<BookmarkBorderRoundedIcon/>} onClick={()=> {console.log("move to archive!")}}/>
                </div>
                {favorite &&
                    <IconWrapper Icon={<FavoriteRoundedIcon/>} onClick={() => {console.log("unfavorited!")}}/>}
                {!favorite &&
                    <IconWrapper Icon={<FavoriteBorderRoundedIcon/>} onClick={()=> {console.log("favorited!")}}/>}
            </div>
        </div>
    ),)}
        </div>
    )

}