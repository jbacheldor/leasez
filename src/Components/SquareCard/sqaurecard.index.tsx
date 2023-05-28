import React from "react";
import { NewFlag, NoFeeFlag, OnMarketFlag } from "../newFlag";
import { SkinnyCardDetailsInput } from "../../Types/skinnycard";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import "./squarecard.style.css";
import { IconWrapper } from "../filter-wrapper";
import { IStoreState } from "../../Types";
import { useSelector } from "react-redux";
import store from "../../store";

const mapStateToProps = (state: IStoreState) => ({
    paginationState: state.paginationState,
  });

export const SquareCard:React.FC<SkinnyCardDetailsInput> = ({ lease }) => {

    const { paginationState } = useSelector(mapStateToProps);
    const { paginationStateReducer} = store.getState().reducers;

    const beginningPost = paginationStateReducer.postsPerPage * (paginationStateReducer.currentPage - 1);
    const endPost = beginningPost + paginationStateReducer.postsPerPage;


    return (
        <div className="cardGrids">        
        {lease.slice(beginningPost, endPost).map(
            ({location, price, beds, isNew, favorite, onMarket, fee, baths, streetAddress}, index) => (
        <div className="squarecard" key={index}>
            <div className="flagPositionSquare">
             <div className="onMarketFlagSq">
                {onMarket && (
                    <OnMarketFlag/>
                )}
                </div>
                <div className="newFlagSq">
                {isNew && (
                    <NewFlag/>
                )}
                </div>
            </div>
            <div className ="cardGridSq">
                <img className="leasePicture" src="https://imgjapan.com/wp-content/uploads/2023/03/Kakao-logo-800x800-1.png" />
                <div className="data">
                        <div className="topData">
                            <div className="location">{location}</div>
                            <div className="streetAddress">{streetAddress}</div>
                            <div className="priceRow">
                                <div className="price">${price}</div>
                                {!fee && 
                                    <NoFeeFlag/>
                                }
                            </div>
                        </div>
                </div>
                <div className="bottomData">
                    {beds == 0 
                        ? <div className="beds">studio</div>
                        : (beds && beds === 1 
                            ? <div className="beds">{beds} bed</div>
                            : <div className="beds">{beds} beds</div>
                        )} 
                    <div className="separator"></div> 
                    {baths && baths > 1 && 
                        <div className="baths">{baths} baths</div> 
                    }
                    {baths && baths === 1 && 
                        <div className="baths">{baths} bath</div> 
                    } 
                <div className="heartlocationSq">
                <IconWrapper Icon={<BookmarkBorderRoundedIcon/>} onClick={()=> {console.log("move to archive!")}}/>
                    {favorite &&
                        <IconWrapper Icon={<FavoriteRoundedIcon/>} onClick={() => {console.log("unfavorited!")}}/>}
                    {!favorite &&
                        <IconWrapper Icon={<FavoriteBorderRoundedIcon/>} onClick={()=> {console.log("favorited!")}}/>}
            </div>                
                </div>
            </div>
        </div>
    ),)}
        </div>
    );
}