import { AppAction, IPaginationState } from '../../Types';
import { pageActions } from '../ActionKeys/actionkeys';
import { initialState } from '../initialState';

const paginationStateReducer = (
    state: IPaginationState = initialState.paginationState,
    action: AppAction, 
): IPaginationState => {
    switch(action.type) {
        case pageActions.NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            };
        case pageActions.BACK_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1, 
            };
        case pageActions.ADJUST_POSTS_PER_PAGE:
            return {
                ...state,
                postsPerPage: action.payload,
            };
        default:
            return {...state}
    }
};

export default paginationStateReducer;