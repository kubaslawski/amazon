import React from "react";
import './product-card.scss';
import {IProduct} from "../../../../interfaces/products";
import ProductPrice from "../product-price/product-price";
import ProductRating from "../product-rating/product-rating";

interface IProductCard {
    product: IProduct
}

const ProductCard: React.FC<IProductCard> = ({product}) => {

    return (
        <div className='col-4 product-card'>
            <div className='product-image'>
                <img src={product.photo}/>
            </div>
            <div className='product-details'>
                <p>{product.name}</p>
                <ProductRating rate={product.product_rating}/>
                <ProductPrice price={product.price}/>
            </div>
        </div>
    )
}

export default ProductCard;