// This is a declaration file which will allow us to reference this type anywhere
// in the application without importing
// Typescript identifies this through the .d.ts extention of the file

declare module "*.json" {
    const value: any;
    export = value;
}

interface IApplicationState {
    readonly loading: boolean;
    readonly ready: boolean;
    readonly error: boolean;
    readonly filterOpen: boolean;
    readonly cardViewSkinny: boolean;
    readonly navigationOpen: boolean;
}

interface IPaginationState {
    readonly loading: boolean;
    readonly currentPage: number;
    readonly postsPerPage: number;
}

interface IStoreState {
    readonly applicationState: IApplicationState;
    readonly paginationState: IPaginationState;
}

export type AppAction = {
    readonly type: any;
    readonly payload?: any;
}