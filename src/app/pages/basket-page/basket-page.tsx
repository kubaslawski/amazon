import {ChangeEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './basket-page.scss';
import {Link, useNavigate} from "react-router-dom";
import {appURL} from "../../../App";
// components
import AButton from "../../reusable-components/AButton/AButton";
// actions
import {checkoutBasket, editBasket, getUserBasket, IBasketItem} from "../../../redux/actions/user";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";
import {IState} from "../../../redux/store";
import {IBasketItemObject} from "../../../redux/reducers/user";
// icons
import sad_face from '../../../icons/sad_face.png';

const BasketPage: React.FC = () => {

    const navigate = useNavigate();
    const dispatch: IDispatchInterface = useDispatch();
    const basketItems: Array<IBasketItemObject> = useSelector((state: IState) => state.user.basket);

    const countQuantity = () => {
        let totalQuantity = 0;
        basketItems?.forEach((obj) => {
            totalQuantity += obj.quantity
        })
        return totalQuantity;
    }

    const countPrice = () => {
        let totalPrice = 0;
        basketItems?.forEach((obj) => {
            totalPrice += obj.quantity * obj.product.price
        })
        return totalPrice;
    }

    useEffect(() => {
        dispatch(getUserBasket());
    }, [dispatch]);

    const handleAdd = (e: ChangeEvent<HTMLInputElement>) => {
        const basketItem: IBasketItem = {
            product: parseInt(e.target.value),
            quantity: 1
        };
        dispatch(editBasket(basketItem));
    };
    const handleRemove = (e: ChangeEvent<HTMLInputElement>) => {
        const basketItem: IBasketItem = {
            product: parseInt(e.target.value),
            quantity: -1
        };
        dispatch(editBasket(basketItem));
    };

    const handleCheckout = () => {
        dispatch(checkoutBasket(navigate));

    }

    return (
        <div className={'basket-page row'}>
            {basketItems?.length < 1 ? (
                <div>
                    <p className={'message-1'}>
                        <img src={sad_face} alt={'sad_face'}/>
                        Your Basket is Empty!
                        <img src={sad_face} alt={'sad_face'}/>
                    </p>
                    <p className={'message-2'}>
                        Add items to cart <Link to={'/products'}>here</Link>
                    </p>
                </div>
            ) : (
                <>
                    <div className={'col-3'}/>
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
                            {basketItems?.map((obj: IBasketItemObject) => {
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
                                                        <img className={'global-table-1__product-image'}
                                                             src={obj.product.photo} alt={'product'}/>
                                                    ) : (
                                                        <img className={'global-table-1__product-image'}
                                                             src={`${appURL}${obj.product.photo}`} alt={'product'}/>
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
                                            <div className={'flex global-table-1__buttons'}>
                                                <AButton text={'+'} onClick={handleAdd} value={obj.product.id}/>
                                                <AButton text={'-'} onClick={handleRemove} value={obj.product.id}/>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                            {basketItems?.length > 0 && (
                                <>
                                    <tr>
                                        <td></td>
                                        <th>
                                            Total Items:
                                        </th>
                                        <th>
                                            Checkout
                                        </th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>{countQuantity()}</td>
                                        <td>{countPrice()} $</td>
                                        <td>
                                            <AButton
                                                text={'Checkout'}
                                                onClick={handleCheckout}
                                            />
                                        </td>
                                    </tr>
                                </>
                            )}

                            </tbody>
                        </table>
                    </div>
                    <div className={'col-3'}/>
                </>
            )}

        </div>

    )
}

export default BasketPage;