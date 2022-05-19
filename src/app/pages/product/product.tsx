import React from "react";
import "./product.scss";
// forms
import AddProduct from "../../forms/addProduct";

const ProductPage: React.FC = () => {
    return (
        <div className="product__container">
            <AddProduct/>
        </div>
    )
}

export default ProductPage;