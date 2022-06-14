import React from "react";
import './product-card.scss';
// externals
import {Link} from "react-router-dom";
// interfaces
import {IProduct} from "../../../../interfaces/products";
// components
import ProductPrice from "../product-price/product-price";
import ProductRating from "../product-rating/product-rating";

interface IProductCard {
    product: IProduct
}

const ProductCard: React.FC<IProductCard> = ({product}) => {

    const {id, photo, name, product_rating, price} = product;

    return (
        <div className='col-4 product-card'>
            <Link className='a--black' to={{
                pathname: `/product/${id}`
            }}>
                <div className='product-image'>
                    <img src={photo} alt='product'/>
                </div>
                <div className='product-details'>
                    <p>{name}</p>
                    <ProductRating rate={product_rating}/>
                    <ProductPrice price={price}/>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard;