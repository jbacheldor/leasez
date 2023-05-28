// need to return and make these not all optional
// these are the fields that come with every listing and show as a preview
export interface LeaseBase {
    location?: string,
    streetAddress?: string,
    price?: number,
    beds?: number,
    baths?: number,
    moveInDate?: string,
    fee?: boolean,
    // these are flags not from the original listing
    favorite?: boolean,
    isNew?: boolean,
    onMarket?: boolean,
}

// these are fields that will allow us to filter and search for particular leases
export interface UnitAmenities extends LeaseBase {
    washer_dryer: boolean, 
    privateOutdoorSpace: boolean, 
    storageAvailable: boolean,
    dishwasher: boolean,
}

export interface BuildingAmenities extends LeaseBase {
    elevator: boolean,
    doorman: boolean, 
    laundry: boolean, 
    gym: boolean,
    publicOutdoorSpace: boolean,
    fiosEnabled: boolean,
    transitLines: [],
}

export interface SkinnyCardDetailsInput {
    lease: LeaseBase[],
}

export interface leaseOverhead {
    SkinnyCardDetailsInput: SkinnyCardDetailsInput, 
    count?: number,
}
