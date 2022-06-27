import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './basket-page.scss';
import {Link} from "react-router-dom";
import {appURL} from "../../../App";
// components
import AButton from "../../reusable-components/AButton/AButton";
// actions
import {editBasket, getUserBasket, IBasketItem} from "../../../redux/actions/user";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";

const BasketPage: React.FC = () => {

    const dispatch: IDispatchInterface = useDispatch();
    const basketItems = useSelector((state: any) => state.user.basket);

    useEffect(() => {
        dispatch(getUserBasket());
    }, [dispatch]);

    const handleAdd = (e: any) => {
        const basketItem: IBasketItem = {
            product: e.target.value,
            quantity: 1
        };
        dispatch(editBasket(basketItem));
    };
    const handleRemove = (e: any) => {
        const basketItem: IBasketItem = {
            product: e.target.value,
            quantity: -1
        };
        dispatch(editBasket(basketItem));
    };

    return (
        <div className={'basket-page row'}>
            <div className={'col-3'}/>
            <div className={'col-6'}>
                <table className={'basket-table'}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {basketItems?.map((obj: any) => {
                        return (
                            <tr key={obj.product.id}>
                                <td>
                                    <Link
                                        className={'basket-table__product-link'}
                                        to={{
                                        pathname: `/product/${obj.product.id}`
                                        }}>
                                        <div className={'basket-table__product-details'}>
                                            <p>{obj.product.name}</p>
                                            {obj.product.photo.startsWith('http') ? (
                                                <img className={'basket-table__product-image'} src={obj.product.photo} alt={'product'}/>
                                            ) : (
                                                <img className={'basket-table__product-image'} src={`${appURL}${obj.product.photo}`} alt={'product'}/>
                                            )}

                                        </div>
                                    </Link>

                                </td>
                                <td>
                                    <p className={'p-center'}>{obj.quantity}</p>
                                </td>
                                <td>
                                    <div className={'flex basket-table__buttons'}>
                                        <AButton text={'+'} onClick={handleAdd} value={obj.product.id}/>
                                        <AButton text={'-'} onClick={handleRemove} value={obj.product.id}/>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div className={'col-3'}/>
        </div>

    )
}

export default BasketPage;