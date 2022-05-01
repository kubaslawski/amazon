export interface ICategories {
    id: string;
    name: string;
    subCategories: Array<ISubCategory>;
}

export interface ISubCategory {
    id: string;
    name: string;
}