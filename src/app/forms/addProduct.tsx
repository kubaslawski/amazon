import React, { useState, useCallback } from "react";
import "./addProduct.scss";
// components
import AInput from "../reusable-components/inputs/AInput/AInput.";
import AFileInput from "../reusable-components/inputs/AFileInput/AFileInput";


const AddProduct: React.FC = () => {
    
    const [productData, setProductData] = useState({
        category: "",
        description: "",
        name: "",
        price: "1",
        subCategory: "",
        image: null
    });
    const [isImage, setIsImage] = useState<boolean>(false);
    const handleChange = (event: any) => {
        setProductData({
            ...productData,
            [event.target.name]: event.target.value
        })
    };
    const handleFileChange = (file: any) => {
        setProductData({
            ...productData,
            image: file
        })
    }
    
    return (
        <div className="row">
            <div className="col-1"/>
            <div className="col-11 add-product__form">
                <h3>Add Product</h3>
                <AInput label="name" name="name" onChange={handleChange} value={productData.name}/>
                <AInput label="description" name="description" onChange={handleChange} value={productData.description}/>
                <AInput label="price" name="price" type="number" onChange={handleChange} value={productData.price}/>
                <AInput label="category" name="category" onChange={handleChange} value={productData.category}/>
                <AInput label="subCategory" name="subCategory" onChange={handleChange} value={productData.subCategory}/>
                <AFileInput label="image" onFileSelectSuccess={(file: any) => handleFileChange(file)}/>
            </div>
            
        </div>
    )
};

export default AddProduct;