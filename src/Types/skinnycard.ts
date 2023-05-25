export interface LeaseBase {
    location?: string,
    streetAddress?: string,
    price?: number,
    beds?: number,
    baths?: number,
    favorite?: boolean,
    isNew?: boolean,
}

export interface SkinnyCardDetailsInput {
    lease: LeaseBase[],
}

export interface leaseOverhead {
    SkinnyCardDetailsInput: SkinnyCardDetailsInput, 
    count?: number,
}
