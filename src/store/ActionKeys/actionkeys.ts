
enum stateActions {
    NAV_TOGGLE = "NAV_TOGGLE",
    CARDVIEW_TOGGLE = "CARDVIEW_TOGGLE",
    FILTER_TOGGLE = "FILTER_TOGGLE"
}

export type AppAction = {
    readonly type: any;
    readonly payload?: stateActions | any;
}

export default stateActions;