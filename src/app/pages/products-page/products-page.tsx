import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./products-page.scss";
import {useParams} from "react-router-dom";
// actions
import {getAllProducts, getCategoryProducts} from "../../../redux/actions/products";
// page components
import ProductCard from "../../components/product/product-card/product-card";
// interfaces
import {IProduct} from "../../../interfaces/products";
import {IDispatchInterface} from "../../../interfaces/global";

const ProductsPage: React.FC = () => {

    const dispatch: IDispatchInterface = useDispatch();
    const params = useParams();
    const products = useSelector((state: any) => state.products.products);

    const {id} = params;

    useEffect(() => {
        if(id){
            dispatch(getCategoryProducts(id));
        } else {
            dispatch(getAllProducts());
        }
    }, [dispatch, id]);

    return (
        <div className="products-page row">
            {products.map((product: IProduct) => {
                return <ProductCard key={product.id} product={product}/>
            })}
        </div>
    )
}

export default ProductsPage;