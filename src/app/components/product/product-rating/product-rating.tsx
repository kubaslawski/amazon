import React from "react";
import "./product-rating.scss";
// icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
// interfaces
import {IProductRate} from "../../../../interfaces/products";

const filled = "#f5eb3b" ;
const unfilled = "#dcdcdc";

interface IProductRating {
    rate: IProductRate
}

const ProductRating: React.FC<IProductRating> = ({rate}) => {

    const {avg_rate, rate_count} = rate;

    const fullStarsLen = Math.round(avg_rate);
    const emptyStarsLen = 5 - fullStarsLen;

    const fullStars = [...Array(fullStarsLen)].map((e, i) => {
        return (
            <FontAwesomeIcon
                key={i}
                className={'star-rating-input__icon'}
                icon={faStar}
                style={{color: filled}}
            />
        )
    })

    const emptyStars = [...Array(emptyStarsLen)].map((e, i) => {
        return (
            <FontAwesomeIcon
                key={i}
                className={'star-rating-input__icon'}
                icon={faStar}
                style={{color: unfilled}}
            />
        )
    })


    return (
        <div className='product-rating'>
            {rate_count > 0 ? (
                <>
                    {fullStars}
                    {emptyStars}
                    <p className='rate-count'>
                        Rate count: {rate_count}
                    </p>
                </>
            ) : (
                <p className='no-rate'>No opinion yet</p>
            )}
        </div>
    )
}

export default ProductRating;