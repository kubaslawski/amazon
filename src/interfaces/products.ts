import {ISeller} from "./users";
import {IOption} from "./global";

export interface IProductRating {
    avg_rate: number;
    rate_count: number;
}

export interface IProduct {
    id: number;
    seller: ISeller;
    category: IOption;
    name: string;
    description: string;
    stock: number;
    price: number;
    photo: string;
    product_rating: IProductRating;
}
