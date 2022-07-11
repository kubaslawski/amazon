import React, {FunctionComponent} from 'react';
import './add-product-page.scss';
// components
import AddProduct from "../../forms/add-product/addProduct";
// HOC
import {isLoadingHOC, IBaseLoadableComponent} from "../../HOC/IsLoadingHOC";

interface IAddProductPage extends IBaseLoadableComponent {}

const AddProductPage: FunctionComponent<IAddProductPage> = ({setLoading}) => {
    return (
        <div className='add-product-page'>
            <AddProduct/>
        </div>
    )
}

export default isLoadingHOC(AddProductPage);