import React, {useEffect} from 'react';
import './product-page.scss';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
// actions
import {getProduct} from "../../../redux/actions/products";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";
import ProductRating from "../../components/product/product-rating/product-rating";
import ProductDelivery from "../../components/delivery/product-delivery/product-delivery";

const ProductPage: React.FC = () => {

    const params = useParams();
    const id = params['id'];

    const dispatch: IDispatchInterface = useDispatch();
    const product = useSelector((state: any) => state.products.product);

    console.log(product);

    useEffect(() => {
        if (id) {
            dispatch(getProduct(id));
        }
        return () => {};
    }, [id, dispatch])

    return (
        <div className='product-page'>
            {product && (
                <>
                 <span className='product-line'>
                    <Link to={{
                        pathname: `/category/${product.category.value}`
                    }}>
                        {product.category.label}
                    </Link>
                     {' -> '}
                     <Link to={{
                         pathname: `/product/${product.id}`
                     }}>
                        {product.name}
                    </Link>

                </span>
                <div className='row'>
                    <div className='col-1'/>
                    <div className='col-10 product-details'>
                        <div className='row'>
                            <div className='product-image col-5'>
                                <img src={product.photo} alt='product-preview'/>
                            </div>
                            <div className='product-details col-3'>
                                <div className='section'>
                                    <p>{product.name}</p>
                                    <ProductRating rate={product.product_rating}/>
                                </div>
                                <div className='section'>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                            <ProductDelivery
                                price={product.price}
                                stock={product.stock}
                            />
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