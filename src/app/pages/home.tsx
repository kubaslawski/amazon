import React, {useCallback, useState} from "react";
// redux
import {addCategory} from "../../redux/actions/categories";
import {useAppDispatch} from "../hooks/useAppDispatch";
// interfaces
import {ICategory, ISubCategory} from "../../interfaces/categories";


const HomePage = () => {
    const dispatch = useAppDispatch();
    
    const [category, setCategory] = useState<ICategory>({
        name: '',
        subCategories: [] as Array<ISubCategory>,
    });
    
    const [subCategory, setSubCategory] = useState<string>("");
    const handleSubCategory = (event: any) => {
        setSubCategory(event.target.value);
    }
    
    const addSubCategory = useCallback(() => {
        const newSubCategories = [...category.subCategories, {name: subCategory}];
        setCategory({
            ...category,
            subCategories: newSubCategories
        });
        setSubCategory("");
    }, [category, subCategory]);
    
    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addCategory(category));
    }, [category, dispatch]);
    
    return (
        <div>
            <h1>Add Category</h1>
            <div className="form--container">
                <input value={subCategory} onChange={handleSubCategory}/>
                <button onClick={addSubCategory}>
                    Add Sub-category
                </button>
                <form onSubmit={handleSubmit} noValidate={true}>
                    <h3>Category Name</h3>
                    <input
                        value={category.name}
                        onChange={(event) => setCategory({...category, name: event.target.value})}
                    />
                    <br/>
                    <h3>Sub-categories:</h3>
                    <ul>
                        {category.subCategories.map((obj: any) => {
                            return <li>{obj}</li>
                        })}
                    </ul>
                    <button>
                        Add Category
                    </button>
                </form>
            </div>
        </div>
    )
}

export default HomePage;