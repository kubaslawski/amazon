export interface ICategory {
    value: string;
    label: string;
    // subCategories: Array<ISubCategory>;
}

export interface ISubCategory {
    id?: string;
    name: string;
}