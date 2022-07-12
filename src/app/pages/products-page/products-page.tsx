import React, {FunctionComponent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./products-page.scss";
import {useParams} from "react-router-dom";
// actions
import {getAllProducts, getCategoryProducts} from "../../../redux/actions/products";
import {getUserData} from "../../../redux/actions/user";
// page components
import ProductCard from "../../components/product/product-card/product-card";
// interfaces
import {IProduct} from "../../../interfaces/products";
import {IDispatchInterface} from "../../../interfaces/global";
import {IState} from "../../../redux/store";
// HOC
import isLoadingHOC, {IBaseLoadableComponent} from "../../HOC/IsLoadingHOC";


interface IProductsPage extends IBaseLoadableComponent {

}

const ProductsPage: FunctionComponent<IProductsPage> = ({setLoading}) => {

    const dispatch: IDispatchInterface = useDispatch();
    const params = useParams();
    const products = useSelector((state: IState) => state.products.products);

    const {id} = params;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if(id){
                await dispatch(getCategoryProducts(id));
            } else {
                await dispatch(getAllProducts());
            }
            setLoading(false);
        }
        fetchData();
    }, [dispatch, id]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await dispatch(getUserData());
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <div className="products-page row">
            {products.map((product: IProduct) => {
                return <ProductCard key={product.id} product={product}/>
            })}
        </div>
    )
}

export default isLoadingHOC(ProductsPage);