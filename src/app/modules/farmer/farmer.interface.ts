export interface Farmer {
    hasHarvest?: boolean;
    hasTransport?: boolean;
    foods?: Food[];
    user?: string;
};


export interface Food {
    _id?: string;
    name?: string;
    dateHarvest?: string;
    onSale?: boolean | unknown;
}
