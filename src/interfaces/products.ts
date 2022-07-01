import {IOption} from "./global";
import {ISubCategory} from "./categories";

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

export interface IProduct {
    id: number;
    category: IOption;
    sub_category: ISubCategory;
    name: string;
    description: string;
    stock: number;
    price: number;
    photo: string;
    product_rating: IProductRate;
}
