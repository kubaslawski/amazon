import React, {useState, useCallback, useEffect, useRef} from "react";
import "./addProduct.scss";
import axios from "axios";

// components
import AInput from "../../reusable-components/inputs/AInput/AInput.";
import AFileInput from "../../reusable-components/inputs/AFileInput/AFileInput";
import product from "../../pages/product/product";
import AButton from "../../reusable-components/AButton/AButton";
import APhotoInput from "../../reusable-components/inputs/AFileInput/AFileInput";

const AddProduct: React.FC = () => {

    const [productData, setProductData] = useState({
        category: "1",
        seller: "2",
        name: "",
        description: "",
        stock: "0",
        price: "0",
        subCategory: "",
        photo: ""
    });
    const [img, setImg] = useState("");

    const handleChange = (event: any) => {
        setProductData({
            ...productData,
            [event.target.name]: event.target.value
        })
    };

    const handleImageChange = (e: any) => {
        setProductData({
            ...productData,
            photo: e.target.files[0]
        });
        setImg(URL.createObjectURL(e.target.files[0]));
    }

    const handleSubmit = () => {
        const data = new FormData();
        axios.post('http://127.0.0.1:8000/amazon/products/', productData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
            .then((res) => console.log(res))
            .catch((err) => console.error(err))
    }

    return (
        <div className="row">
            <div className="col-1"/>
            <div className="col-11 add-product__form">
                <h3>Add Product</h3>
                <AInput label="name" name="name" onChange={handleChange} value={productData.name}/>
                <AInput label="description" name="description" onChange={handleChange} value={productData.description}/>
                <AInput label="price" name="price" type="number" onChange={handleChange} value={productData.price}/>
                <AInput label="stock" name="stock" type="number" onChange={handleChange} value={productData.stock}/>
                <AInput label="category" name="category" onChange={handleChange} value={productData.category}/>
                <APhotoInput name="photo" label="photo" onPhotoChange={handleImageChange}/>
                <AButton text="Submit" onClick={handleSubmit} className="add-product__button"/>
            </div>
            {img && (
                <div className="image-preview">
                    <img src={img} alt="imgage-preview"/>
                </div>
            )}
        </div>
    )
};

export default AddProduct;