import React from "react";
import {Link} from "react-router-dom";
import './ACard.scss';


interface IACard {
    title: string;
    photo: string;
    pk: string
}

const ACard: React.FC<IACard> = ({title, photo, pk}) => {
    return (
            <div className={'a-card col-4'}>
                <Link to={{
                    pathname: `/category/${pk}`}
                }>
                    <p className={'p-center bold'}>{title}</p>
                    <img className={'category-photo'} src={photo} alt={'img'}/>
                </Link>
            </div>
    )
}

export default ACard;