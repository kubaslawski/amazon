import React, {ChangeEvent, FormEvent, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './rate-product-form.scss';
// components
import AStarRatingInput from "../../reusable-components/AStarRatingInput/AStarRatingInput";
import ATextArea from "../../reusable-components/inputs/ATextArea/ATextArea";
import AButton from "../../reusable-components/AButton/AButton";
// actions
import {rateProduct} from "../../../redux/actions/products";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";
import {IState} from "../../../redux/store";

interface IRateProductForm {
    productId: string
}

const RateProductForm: React.FC<IRateProductForm> = ({productId}) => {

    const dispatch: IDispatchInterface = useDispatch();
    const author = useSelector((state: IState) => state.user.credentials.id);
    const errors: Array<string> = useSelector((state: IState) => state.ui.errors);

    const [rateData, setRateData] = useState({
        author: author,
        product: productId,
        content: '',
        rate: 0
    })

    useEffect(() => {
        setRateData({
            ...rateData,
            author: author
        })
    }, [author])

    const handleComment = (event: ChangeEvent<HTMLInputElement>) => {
        setRateData({
            ...rateData,
            content: event.target.value
        })
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch(rateProduct(rateData));
    }

    return (
        <div className={'rate-product-form col-4'}>
            <form noValidate={true} onSubmit={handleSubmit}>
                <ATextArea
                    className={'rate-product-textarea'}
                    errors={errors}
                    label={'What do you think about this product?'}
                    onChange={handleComment}
                    placeholder={'Your thoughts...'}
                    value={rateData.content}
                />
                <p>How many star are you going to give?</p>
                <AStarRatingInput
                    count={5}
                    onRating={rate => setRateData({...rateData, rate: rate})}
                    rating={rateData.rate}
                />
                <AButton text={'Submit'}/>
            </form>
        </div>
    )
}

export default RateProductForm;