import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { pageActions } from "../../store/ActionKeys/actionkeys";
import { IStoreState } from "../../Types";

interface DropDownProps {
    props: any[];
}

const mapStateToProps = (state: IStoreState) => ({
    paginationState: state.paginationState,
  });

export const DropDown:React.FC<DropDownProps> = ({props}) => {

    const { paginationState } = useSelector(mapStateToProps);
    const { paginationStateReducer } = store.getState().reducers;

    const dispatch = useDispatch(); 

    const changePostsPerPage = (val: number) => {
        dispatch({paginationState, type: pageActions.ADJUST_POSTS_PER_PAGE, payload: val })
    };

    return (
        <div className="dropdown">
        {props.map((value, key) =>
            <div key={key} onClick={() => changePostsPerPage(value)}>{value}</div>
        )}
        </div>
    )
}