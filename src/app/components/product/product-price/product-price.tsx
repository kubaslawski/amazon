import React from "react";
import './product-price.scss';

interface IProductPrice {
    price: number;
}

const ProductPrice: React.FC<IProductPrice> = ({price}) => {

    const strPrice = (price.toString()).split('.');

    return (
        <div className='product-price'>
            <span className='product-price__symbol'>
                $
            </span>
            <span className='product-price__whole'>
                {strPrice[0]}
            </span>
            <span className='product-price__fraction'>
                {strPrice[1] === undefined ? '00' : strPrice[1]}
            </span>
        </div>
    )
}

export default ProductPrice;