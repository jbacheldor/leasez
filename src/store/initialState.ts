import { IApplicationState, IStoreState } from "../Types"

export const initialApplicationState:IApplicationState = {
    loading: false,
    ready: false,
    error: false,
    filterOpen: false,
    cardViewSkinny: false,
    navigationOpen: false,
}

export const initialState: IStoreState = {
    applicationState: initialApplicationState
}