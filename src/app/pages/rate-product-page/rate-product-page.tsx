import React, {FunctionComponent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import './rate-product-page.scss';
// components
import ProductImage from "../product-page/helpers/product-image";
import ProductDetails from "../product-page/helpers/product-details";
// forms
import RateProductForm from "../../forms/rate-product/rate-product-form";
// actions
import {getProduct} from "../../../redux/actions/products";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";
import {IState} from "../../../redux/store";
// HOC
import {isLoadingHOC, IBaseLoadableComponent} from "../../HOC/IsLoadingHOC";

interface IRateProductPage extends IBaseLoadableComponent {}

const RateProductPage: FunctionComponent<IRateProductPage> = ({setLoading}) => {

    const params = useParams();
    const dispatch: IDispatchInterface = useDispatch();
    const productId: string = params['productId']!;

    const product = useSelector((state: IState) => state.products.product);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await dispatch(getProduct(productId));
            setLoading(false);
        }
        if(productId){
            fetchData();
        }
    }, [productId])

    return (
        <div className={'row rate-product-page'}>
            <div className={'col-1'}/>
            <div className={'col-10'}>
                <div className={'row'}>
                    {productId && <RateProductForm productId={productId}/>}
                    <ProductImage photo={product.photo}/>
                    <ProductDetails product={product}/>
                </div>
            </div>
            <div className={'col-1'}/>
        </div>
    )
}

export default isLoadingHOC(RateProductPage);