import React, {useState} from "react";
import './helpers.scss';
// components
import ProductPrice from "../../../components/product/product-price/product-price";
import ASelectInput from "../../../reusable-components/inputs/ASelectInput/ASelectInput";
import AButton from "../../../reusable-components/AButton/AButton";
// icons
import location from '../../../../icons/location.png';
import lock from '../../../../icons/lock.png';
// interfaces
import {IProduct} from "../../../../interfaces/products";
// functions
import {addToBasket} from "../../../functions/add-to-basket";


interface IProductDelivery {
    product: IProduct
}


const ProductDelivery: React.FC<IProductDelivery> = ({product}) => {

    const {stock, price} = product;

    const options = Array.from(Array(stock).keys()).map((obj) => {
        return {
            value: obj,
            label: obj.toString()
        }
    })
    const [quantity, setQuantity] = useState<number>(1);

    const handleChange = (e: any) => {
        setQuantity(parseInt(e.target.value));
    };
    const handleAddToBasket = () => {
        addToBasket(product.id, quantity);
    }


    return (
        <div className='col-4 product-delivery'>
            <ProductPrice price={price}/>
            <p className='delivery-time'>
                <span className='delivery-time__1'>
                    FREE delivery
                </span>
                <br/>
                <span className='delivery-time__2'>
                    on 20 June
                </span>
            </p>
            <p className='delivery-address'>
                <img className='delivery-location' src={location} alt='location'/>
                <span>
                    Choose delivery address
                </span>
            </p>
            <div className='is-product-available'>
                {stock > 0 ? (
                    <span>Available</span>
                ) : <span>No Available</span>}
            </div>
            <div className='delivery-quantity'>
                <span>Quantity: </span>
                <ASelectInput
                    value={quantity}
                    onChange={handleChange}
                    options={options}
                    label=''
                />
            </div>
            <div className='purchase-options'>
                <AButton
                    text='Add to basket'
                    variant={"transparent"}
                    className='add-to-basket-button'
                    onClick={handleAddToBasket}
                />
                <br/>
                <AButton
                    text='Buy now'
                    variant={"transparent"}
                    className='buy-now-button'
                />
            </div>
            <div className='safe-transaction'>
                <p className='safe-transaction-p'>
                    <img className='safe-transaction-img' src={lock} alt="lock"/>
                    <span>Safe transaction</span>
                </p>
            </div>
            <div className='add-to-wishlist'>
                <AButton
                    text='Add to wishlist'
                    variant={'transparent'}
                    className='add-to-wishlist-button'
                />
            </div>
        </div>
    )
}

export default ProductDelivery;