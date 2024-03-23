import { AppAction, IApplicationState } from '../../Types';
import { stateActions } from '../ActionKeys/actionkeys';
import { initialState } from '../initialState';

const appStateReducer = (
    state: IApplicationState = initialState.applicationState,
    action: AppAction, 
): IApplicationState => {
    switch(action.type) {
        case stateActions.NAV_TOGGLE:
            return {
                ...state,
                navigationOpen: !state.navigationOpen,
            };
        case stateActions.FILTER_TOGGLE:
            return {
                ...state, 
                filterOpen: !state.filterOpen,
            };
        case stateActions.CARDVIEW_TOGGLE:
            return {
                ...state,
                cardViewSkinny: !state.cardViewSkinny,
            };
        default:
            return {...state}
    }
};

export default appStateReducer;