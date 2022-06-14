import React from "react";
import './product-delivery.scss'
// components
import ProductPrice from "../../product/product-price/product-price";
import ASelectInput from "../../../reusable-components/inputs/ASelectInput/ASelectInput";
import AButton from "../../../reusable-components/AButton/AButton";
// icons
import location from '../../../../icons/location.png';
import lock from '../../../../icons/lock.png';

interface IProductDelivery {
    price: number;
    stock: number;
}

const ProductDelivery: React.FC<IProductDelivery> = ({price, stock}) => {

    const handleChange = () => {};
    const options = Array.from(Array(stock).keys()).map((obj) => {
        return {
            value: obj,
            label: obj.toString()
        }
    })

    return (
        <div className='col-4 product-delivery'>
            Product Delivery
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