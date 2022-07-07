import React from "react";
import './rate-review.scss';
// icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

const filled = "#f5eb3b" ;
const unfilled = "#dcdcdc";

interface IRateReview {
    rate: number;
}

const RateReview: React.FC<IRateReview> = ({
    rate
}) => {


    const fullStarsLen = Math.round(rate);
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
        <div className={'rate-review flex'}>
            {fullStars}
            {emptyStars}
        </div>
    )
}

export default RateReview;