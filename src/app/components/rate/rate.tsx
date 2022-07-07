import React from "react";
import './rate.scss';
// interfaces
import {IRate} from "../../../interfaces/products";
import RateReview from "../rate-review/rate-review";

const Rate: React.FC<IRate> = ({
    author,
    content,
    created,
    id,
    rate
}) => {
    const date = created.slice(0, 10);
    return (
        <div className={'rate row' }>
            <div className={'col-1'}/>
            <div className={'col-10 rate-details'}>
                <p>
                    <span>{author.first_name}  {author.last_name}</span>
                    <span>  on {date}</span>
                </p>
                <RateReview rate={rate}/>
                {content}
            </div>
            <div className={'col-1'}/>

        </div>
    )
}

export default Rate;