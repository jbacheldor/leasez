export const initialApplicationState:ApplicationState = {
    loading: false,
    ready: false,
    error: false,
    filterOpen: false,
    cardViewSkinny: false,
    navigationOpen: false,
}

export interface ApplicationState {
    readonly loading: boolean;
    readonly ready: boolean;
    readonly error: boolean;
    readonly filterOpen: boolean;
    readonly cardViewSkinny: boolean;
    readonly navigationOpen: boolean;
}

export interface StoreState {
    readonly applicationState: ApplicationState
}

export const initialState: StoreState = {
    applicationState: initialApplicationState
}