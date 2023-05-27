import { IApplicationState, IPaginationState, IStoreState } from "../Types"

export const initialApplicationState:IApplicationState = {
    loading: false,
    ready: false,
    error: false,
    filterOpen: false,
    cardViewSkinny: false,
    navigationOpen: false,
}

export const initialPaginationState:IPaginationState = {
    loading: false,
    currentPage: 1,
    postsPerPage: 1,
}

export const initialState: IStoreState = {
    applicationState: initialApplicationState,
    paginationState: initialPaginationState,
}