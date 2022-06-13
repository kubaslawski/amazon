import React from 'react';
import './add-product-page.scss';
// components
import AddProduct from "../../forms/addProduct/addProduct";

const AddProductPage: React.FC = () => {
    return (
        <div className='add-product-page'>
            <AddProduct/>
        </div>
    )
}

export default AddProductPage;