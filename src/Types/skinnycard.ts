export interface LeaseBase {
    location?: string,
    streetAddress?: string,
    price?: number,
    beds?: number,
    baths?: number,
    favorite?: boolean,
    isNew?: boolean,
    // this is for if/when the listing becomes available
    onMarket?: boolean,
}

export interface SkinnyCardDetailsInput {
    lease: LeaseBase[],
}

export interface leaseOverhead {
    SkinnyCardDetailsInput: SkinnyCardDetailsInput, 
    count?: number,
}
