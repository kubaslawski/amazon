import React, {useEffect} from 'react';
import './product-page.scss';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
// actions
import {getProduct} from "../../../redux/actions/products";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";
import {IProduct} from "../../../interfaces/products";
import {IState} from "../../../redux/store";
// components
import ProductDelivery from "./helpers/product-delivery";
import ProductHeader from "./helpers/product-header";
import ProductDetails from "./helpers/product-details";
import ProductImage from "./helpers/product-image";

const ProductPage: React.FC = () => {

    const params = useParams();
    const id = params['id'];

    const dispatch: IDispatchInterface = useDispatch();
    const product: IProduct = useSelector((state: IState) => state.products.product);

    useEffect(() => {
        if (id) {
            dispatch(getProduct(id));
        }
        return () => {
        };
    }, [id, dispatch])


    return (
        <div className='product-page'>
                {product && (
                    <>
                        <ProductHeader product={product}/>
                        <div className='row'>
                            <div className='col-1'/>
                            <div className='col-10 product-details'>
                                <div className='row'>
                                    <ProductImage photo={product.photo}/>
                                    <ProductDetails product={product}/>
                                    <ProductDelivery product={product}/>
                                </div>
                            </div>
                            <div className='col-1'/>
                        </div>
                    </>
                )}
        </div>
    )
}

export default ProductPage;