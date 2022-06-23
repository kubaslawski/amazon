import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './basket-page.scss';
// components
import AButton from "../../reusable-components/AButton/AButton";
// actions
import {getUserBasket} from "../../../redux/actions/user";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";

const BasketPage: React.FC = () => {

    const dispatch: IDispatchInterface = useDispatch();
    const basketItems = useSelector((state: any) => state.user.basket);

    useEffect(() => {
        dispatch(getUserBasket());
    }, [dispatch]);

    const handleAdd = () => {};
    const handleRemove = () => {};

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
                                    <div className={'basket-table__product-details'}>
                                        <p>{obj.product.name}</p>
                                        <img src={obj.product.photo} alt={'product-photo'}/>
                                    </div>
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