export interface Farmer {
    _id?: string;
    hasHarvest?: boolean;
    hasTransport?: boolean;
    foods?: Food[];
    user?: string;
};


export interface Food {
    id?: string;
    name?: string;
    dateHarvest?: string;
    onSale?: boolean | unknown;
}
