import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import './rate-product-page.scss';
// components
import ProductImage from "../product-page/helpers/product-image";
import ProductDetails from "../product-page/helpers/product-details";
// forms
import RateProductForm from "../../forms/rate-product/rate-product";
// actions
import {getProduct} from "../../../redux/actions/products";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";
import {IState} from "../../../redux/store";



const RateProductPage: React.FC = () => {

    const params = useParams();
    const dispatch: IDispatchInterface = useDispatch();
    const productId = params['productId'];

    const product = useSelector((state: IState) => state.products.product);

    useEffect(() => {
        if(productId){
            dispatch(getProduct(productId));
        }
    }, [productId])

    return (
        <div className={'row rate-product-page'}>
            <div className={'col-1'}/>
            <div className={'col-10'}>
                <div className={'row'}>
                    <RateProductForm/>
                    <ProductImage photo={product.photo}/>
                    <ProductDetails product={product}/>
                </div>
            </div>
            <div className={'col-1'}/>
        </div>
    )
}

export default RateProductPage;