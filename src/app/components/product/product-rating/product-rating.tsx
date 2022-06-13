import React from "react";
import "./product-rating.scss";
// icons
import fullStar from '../../../../icons/full-star.png';
import emptyStar from '../../../../icons/empty-star.png';
// interfaces
import {IProductRate} from "../../../../interfaces/products";

interface IProductRating {
    rate: IProductRate
}

const ProductRating: React.FC<IProductRating> = ({rate}) => {

    const {avg_rate, rate_count} = rate;

    const fullStarsLen = Math.round(avg_rate);
    const emptyStarsLen = 5 - fullStarsLen;

    const fullStars = [...Array(fullStarsLen)].map((e, i) => {
        return (
            <img key={`full-star rating ${i}`} className='star-image' src={fullStar} alt='star'/>
        )
    })

    const emptyStars = [...Array(emptyStarsLen)].map((e, i) => {
        return (
            <img key={`empty-star rating ${i}`} className='star-image' src={emptyStar} alt='star'/>
        )
    })


    return (
        <div className='product-rating'>
            {rate_count > 0 ? (
                <>
                    {fullStars}
                    {emptyStars}
                    <p className='rate-count'>
                        {rate_count}
                    </p>
                </>
            ) : (
                <p className='no-rate'>No opinion yet</p>
            )}
        </div>
    )
}

export default ProductRating;