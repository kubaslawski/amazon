import React, {ChangeEvent, useState} from "react";
import './rate-product.scss';
// components
import AInput from "../../reusable-components/inputs/AInput/AInput.";
import AStarRatingInput from "../../reusable-components/AStarRatingInput/AStarRatingInput";

const RateProductForm: React.FC = () => {

    const [comment, setComment] = useState<string>('');
    const [rate, setRate] = useState<number>(0);

    return (
        <div className={'rate-product-form col-4'}>
            <AInput
                onChange={(e:ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
                value={comment}
            />
            <AStarRatingInput
                count={5}
                onRating={rate => setRate(rate)}
                rating={rate}
            />
        </div>
    )
}

export default RateProductForm;