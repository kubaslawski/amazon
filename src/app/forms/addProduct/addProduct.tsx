import React, {useState, useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./addProduct.scss";

// ext libraries
import axios from "axios";

// components
import AInput from "../../reusable-components/inputs/AInput/AInput.";
import AButton from "../../reusable-components/AButton/AButton";
import APhotoInput from "../../reusable-components/inputs/AFileInput/AFileInput";
import {getAllCategories} from "../../../redux/actions/categories";
import {IDispatchInterface} from "../../../interfaces/global";
import ASelectInput from "../../reusable-components/inputs/ASelectInput/ASelectInput";

const AddProduct: React.FC = () => {

    const dispatch: IDispatchInterface = useDispatch();
    const categories = useSelector((state: any) => state.categories.categories)
    const [productData, setProductData] = useState({
        category: "1",
        seller: "1",
        name: "",
        description: "",
        stock: "0",
        price: "0",
        subCategory: "",
        photo: ""
    });
    const [img, setImg] = useState("");

    useEffect(() => {
        dispatch(getAllCategories());
    }, [])

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
        axios.post('/products/', productData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
            .then((res) => console.log(res))
            .catch((err) => console.error(err))
    }

    const handleSelectChange = (e: any) => {
        console.log(e)
    }

    return (
        <div className="row">
            <div className="col-1"/>
            <div className="col-4 add-product__form">
                <h3>Add Product</h3>
                <AInput label="name" name="name" onChange={handleChange} value={productData.name}/>
                <AInput label="description" name="description" onChange={handleChange} value={productData.description}/>
                <AInput label="price" name="price" type="number" onChange={handleChange} value={productData.price}/>
                <AInput label="stock" name="stock" type="number" onChange={handleChange} value={productData.stock}/>
                <ASelectInput onChange={handleSelectChange} options={categories} label="category"/>
                <APhotoInput name="photo" label="photo" onPhotoChange={handleImageChange}/>
                <AButton text="Submit" onClick={handleSubmit} className="add-product__button"/>
            </div>
            {img && (
                <div className="col-7">
                    <img src={img} alt="image-preview"/>
                </div>
            )}
        </div>
    )
};

export default AddProduct;