import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./product-page.scss";
import {IDispatchInterface} from "../../../interfaces/global";

import {getAllProducts} from "../../../redux/actions/products";
// page components
import AddProduct from "../../forms/addProduct/addProduct";
import ProductCard from "../../components/product/product-card/product-card";
// interfaces
import {IProduct} from "../../../interfaces/products";

const ProductPage: React.FC = () => {
    const dispatch: IDispatchInterface = useDispatch();
    const products = useSelector((state: any) => state.products.products);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div className="product-page row">
            {products.map((product: IProduct) => {
                return <ProductCard key={product.id} product={product}/>
            })}
        </div>
    )
}

export default ProductPage;