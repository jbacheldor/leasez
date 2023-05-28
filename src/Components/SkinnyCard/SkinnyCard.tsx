import "./card.style.css";
import React from "react";
import { SkinnyCardDetailsInput } from "../../Types/skinnycard";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import OutdoorGrillOutlinedIcon from '@mui/icons-material/OutdoorGrillOutlined';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import ElevatorOutlinedIcon from '@mui/icons-material/ElevatorOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import { NewFlag, NoFeeFlag, OnMarketFlag } from "../newFlag";
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

    const beginningPost = paginationStateReducer.postsPerPage * (paginationStateReducer.currentPage - 1);
    const endPost = beginningPost + paginationStateReducer.postsPerPage;

    return (
        <div className="card">        
        {lease.slice(beginningPost, endPost).map(
            ({location, price, beds, isNew, favorite, onMarket, fee, baths, streetAddress, moveInDate}, index) => (
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
                <img className="leasePictureSk" src="https://imgjapan.com/wp-content/uploads/2023/03/Kakao-logo-800x800-1.png" />
                <div className="data">
                <div className="location">{location}</div>
                    <div className="streetAddress">{streetAddress}</div>
                    <div className="priceRow">
                        <div className="price">${price}</div>
                        {!fee && 
                            <NoFeeFlag/>
                        }
                    </div>
                <div className="moveinDateSk">{moveInDate}</div>
                <div className="bottomData">
                {beds == 0 
                ? <div className="bedsSk">studio</div>
                : (beds && beds === 1 
                    ? <div className="bedsSk">{beds} bed</div>
                    : <div className="bedsSk">{beds} beds</div>
                )} 
                <div className="separatorSk"></div> 
                {baths && baths > 1 && 
                    <div className="bathsSk">{baths} baths</div> 
                }
                {baths && baths === 1 && 
                    <div className="bathsSk">{baths} bath</div> 
                } 
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
            <div className="additionalInfo">
            <div className="AmenitiesGrid">
            <LocalLaundryServiceOutlinedIcon/>
            <PetsRoundedIcon/>
            <ElevatorOutlinedIcon/>
            <FitnessCenterOutlinedIcon/>
            <OutdoorGrillOutlinedIcon/>
            </div>
            <div className="transitLines">
            Transit Lines:
            </div>
            </div>
        </div>
    ),)}
        </div>
    )

}