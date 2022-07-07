import {ISubCategory, ICategory} from "./categories";

export interface IProductRate {
    avg_rate: number;
    rate_count: number;
}

export interface IAddProduct {
    category: string;
    seller: string;
    name: string;
    description: string;
    stock: string;
    price: string;
    photo: string;
}

export interface IRate {
    id: number;
    author: {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
    },
    content: string;
    created: string;
    rate: number;
}

export interface IProduct {
    id: number;
    category: ICategory;
    sub_category: ISubCategory;
    name: string;
    description: string;
    stock: number;
    price: number;
    photo: string;
    product_rating: IProductRate;
}

export interface ISingleProduct extends IProduct {
    rates: Array<IRate>
}

export interface IRateData {
    author: number;
    product: string;
    content: string;
    rate: number;
}
