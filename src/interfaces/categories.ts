export interface ICategory {
    title: string;
    photo: string;
    pk: string;
    sub_categories: Array<ISubCategory>;
}

export interface ISubCategory {
    id: string;
    photo: string;
    title: string;
}
