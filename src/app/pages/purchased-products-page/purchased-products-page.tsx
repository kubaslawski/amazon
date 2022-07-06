import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './purchased-products-page.scss';
import {Link} from "react-router-dom";
import {appURL} from "../../../App";
import {getUserPurchasedProducts} from "../../../redux/actions/user";
// components
import AButton from "../../reusable-components/AButton/AButton";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";
import {IState} from "../../../redux/store";
import {IPurchasedProduct} from "../../../redux/reducers/user";



const PurchasedProductsPage: React.FC = () => {

    const dispatch: IDispatchInterface = useDispatch();
    const purchasedProducts: Array<IPurchasedProduct> = useSelector((state: IState) => state.user.purchasedProducts);

    useEffect(() => {
        dispatch(getUserPurchasedProducts());
    }, []);

    const countQuantity = () => {
        let totalQuantity = 0;
        purchasedProducts?.forEach((obj) => {
            totalQuantity += obj.quantity
        })
        return totalQuantity;
    }

    const countPrice = () => {
        let totalPrice = 0;
        purchasedProducts?.forEach((obj) => {
            totalPrice += obj.quantity * obj.product.price
        })
        return totalPrice;
    }

    return (
        <div className={'row purchased-products-page'}>
            <div className={'col-3'}></div>
            <div className={'col-6'}>
                <table className={'global-table-1'}>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {purchasedProducts?.map((obj: any) => {
                        return (
                            <tr key={obj.product.id}>
                                <td>
                                    <Link
                                        className={'global-table-1__product-link'}
                                        to={{
                                            pathname: `/product/${obj.product.id}`
                                        }}>
                                        <div className={'global-table-1__product-details'}>
                                            <p>{obj.product.name}</p>
                                            {obj.product.photo.startsWith('http') ? (
                                                <img className={'global-table-1__product-image'} src={obj.product.photo} alt={'product'}/>
                                            ) : (
                                                <img className={'global-table-1__product-image'} src={`${appURL}${obj.product.photo}`} alt={'product'}/>
                                            )}

                                        </div>
                                    </Link>

                                </td>
                                <td>
                                    <p className={'p-center'}>{obj.quantity}</p>
                                </td>
                                <td>
                                    <p className={'p-center'}>{obj.quantity * obj.product.price} $</p>
                                </td>
                                <td>
                                    <Link to={{
                                        pathname: `/rate-product/${obj.product.id}`,
                                    }}>
                                        <AButton
                                            text={'Rate Product'}
                                        />
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                    {purchasedProducts?.length > 0 && (
                        <>
                            <tr>
                                <td></td>
                                <th>
                                    Total Items:
                                </th>
                                <th>
                                    Money Spent:
                                </th>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>{countQuantity()}</td>
                                <td>{countPrice()} $</td>
                            </tr>
                        </>
                    )}
                    </tbody>
                </table>
            </div>
            <div className={'col-3'}></div>
        </div>
    )
}

export default PurchasedProductsPage;