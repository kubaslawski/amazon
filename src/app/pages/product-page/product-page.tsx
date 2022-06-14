import React, {useEffect} from 'react';
import './product-page.scss';
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
// actions
import {getProduct} from "../../../redux/actions/products";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";

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
    }, [id])

    return (
        <div className='product-page'>
            {product && (
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
            )}
        </div>
    )
}

export default ProductPage;