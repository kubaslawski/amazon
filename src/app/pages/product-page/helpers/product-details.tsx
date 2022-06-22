import React from "react";
import {IProduct} from "../../../../interfaces/products";
import ProductRating from "../../../components/product/product-rating/product-rating";

interface IProductDetails {
    product: IProduct
}

const ProductDetails: React.FC<IProductDetails> = ({product}) => {
    return (
        <div className={'product-details col-3'}>
            <div className={'section'}>
                <p>{product.name}</p>
                <ProductRating rate={product.product_rating}/>
            </div>
            <div className={'section'}>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductDetails;