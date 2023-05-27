import { combineReducers } from "redux";
import appStateReducer from "./reducers/appStateReducer";
import paginationStateReducer from "./reducers/paginationStateReducer";

const reducers = combineReducers({
    appStateReducer,
    paginationStateReducer,
});

export default reducers;