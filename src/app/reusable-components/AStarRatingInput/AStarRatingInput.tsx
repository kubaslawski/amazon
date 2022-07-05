import React, {useState, useMemo} from "react";
import './AStarRatingInput.scss';
// icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";

interface IAStarRatingInput {
    color?: {
        filled: string;
        unfilled: string
    };
    count: number;
    onRating: (...args: any) => void;
    rating: number;
}


const AStarRatingInput: React.FC<IAStarRatingInput> = ({
    color = {
        filled: "#f5eb3b",
        unfilled: "#dcdcdc"
    },
    count = 5,
    onRating,
    rating
}) => {

    const [hoverRating, setHoverRating] = useState<number>(0)
    const getColor = (index: any) => {
        if(hoverRating >= index){
            return color.filled
        } else if(!hoverRating && rating >= index){
            return color.filled;
        }
        return color.unfilled
    }

    const starRating = useMemo(() => {
        return Array(count)
            .fill(0)
            .map((_, i) => i+1)
            .map((idx) => (
                <FontAwesomeIcon
                    key={idx}
                    className={'cursor-pointer'}
                    icon={faStar}
                    onClick={() => onRating(idx)}
                    style={{color: getColor(idx)}}
                    onMouseEnter={() => setHoverRating(idx)}
                    onMouseLeave={() => setHoverRating(0)}
                />
            ))
    }, [count, rating, hoverRating])

    return (
        <div className={'star-rating-input'}>
            {starRating}
        </div>
    )
}

export default AStarRatingInput;