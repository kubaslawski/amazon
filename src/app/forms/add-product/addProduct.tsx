import React, {useState, useEffect, ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./addProduct.scss";
// components
import AInput from "../../reusable-components/inputs/AInput/AInput.";
import AButton from "../../reusable-components/AButton/AButton";
import APhotoInput from "../../reusable-components/inputs/AFileInput/AFileInput";
import ASelectInput from "../../reusable-components/inputs/ASelectInput/ASelectInput";
// actions
import {getAllCategories} from "../../../redux/actions/categories";
import {addProduct} from "../../../redux/actions/products";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";
import {IAddProduct} from "../../../interfaces/products";
import {IState} from "../../../redux/store";

const AddProduct: React.FC = () => {

    const dispatch: IDispatchInterface = useDispatch();
    const categories = useSelector((state: IState) => state.categories.categories)
    const [productData, setProductData] = useState<IAddProduct>({
        category: "1",
        seller: "1",
        name: "",
        description: "",
        stock: "0",
        price: "0",
        photo: ""
    });
    const [img, setImg] = useState("");

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        dispatch(addProduct(productData));
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
                <ASelectInput name='category' onChange={handleChange} options={categories.map((obj) => {
                    return {
                        value: obj.title,
                        label: obj.title
                    }
                })} label="category"/>
                <APhotoInput name="photo" label="photo" onPhotoChange={handleImageChange}/>
                <AButton text="Submit" onClick={handleSubmit} className="add-product__button"/>
            </div>
            {img && (
                <div className="col-7">
                    <img src={img} alt="preview"/>
                </div>
            )}
        </div>
    )
};

export default AddProduct;