import stateActions, { AppAction } from '../ActionKeys/actionkeys';
import { ApplicationState, initialState } from '../initialState';

const appStateReducer = (
    state: ApplicationState = initialState.applicationState,
    action: AppAction, 
) => {
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
            return {state}
    }
};

export default appStateReducer;