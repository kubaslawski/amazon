import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./products-page.scss";
import {getAllProducts} from "../../../redux/actions/products";
// page components
import ProductCard from "../../components/product/product-card/product-card";
// interfaces
import {IProduct} from "../../../interfaces/products";
import {IDispatchInterface} from "../../../interfaces/global";

const ProductsPage: React.FC = () => {
    const dispatch: IDispatchInterface = useDispatch();
    const products = useSelector((state: any) => state.products.products);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <div className="products-page row">
            {products.map((product: IProduct) => {
                return <ProductCard key={product.id} product={product}/>
            })}
        </div>
    )
}

export default ProductsPage;