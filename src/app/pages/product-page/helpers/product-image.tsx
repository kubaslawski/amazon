import React from "react";

interface IProductImage {
    photo: string
}

const ProductImage: React.FC<IProductImage> = ({photo}) => {
    return (
        <div className='product-image col-5'>
            <img src={photo} alt='product-preview'/>
        </div>
    )
}

export default ProductImage;