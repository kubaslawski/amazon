import React, {FunctionComponent, useEffect} from 'react';
import './product-page.scss';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
// actions
import {getProduct} from "../../../redux/actions/products";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";
import {ISingleProduct} from "../../../interfaces/products";
import {IState} from "../../../redux/store";
// components
import ProductDelivery from "./helpers/product-delivery";
import ProductHeader from "./helpers/product-header";
import ProductDetails from "./helpers/product-details";
import ProductImage from "./helpers/product-image";
import Rate from "../../components/rate/rate";
// HOC
import {isLoadingHOC, IBaseLoadableComponent} from "../../HOC/IsLoadingHOC";

interface IProductPage extends IBaseLoadableComponent {}

const ProductPage: FunctionComponent<IProductPage> = ({setLoading}) => {

    const params = useParams();
    const id: string = params['id']!;

    const dispatch: IDispatchInterface = useDispatch();
    const product: ISingleProduct = useSelector((state: IState) => state.products.product);

    useEffect(() => {
        const fetchData = async (id: string) => {
            setLoading(true);
            await dispatch(getProduct(id));
            setLoading(false);
        }
        if (id) {
            fetchData(id);
        }
        return () => {};
    }, [id]);

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
                        {product.rates && (
                            product.rates.map((rate) => {
                                return (
                                    <Rate
                                        key={rate.id}
                                        id={rate.id}
                                        author={rate.author}
                                        content={rate.content}
                                        created={rate.created}
                                        rate={rate.rate}
                                    />
                                )
                            })
                        )}
                    </>
                )}
        </div>
    )
}

export default isLoadingHOC(ProductPage);