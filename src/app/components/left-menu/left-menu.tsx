import React, {useEffect} from "react";
import './left-menu.scss';
import {useDispatch, useSelector} from "react-redux";
// actions
import {getAllCategories} from "../../../redux/actions/categories";
// components
import CategoriesMenuSection from "./sections/categories/categories";
// interfaces
import {ICategory} from "../../../interfaces/categories";
import {IState} from "../../../redux/store";
import {IDispatchInterface} from "../../../interfaces/global";
// icons/photos
import user from "../../images/user.png";

const LeftMenu: React.FC = () => {

    const dispatch: IDispatchInterface = useDispatch();
    const categories: Array<ICategory> = useSelector((state: IState) => state.categories.categories);

    useEffect(() => {
        if(categories === []){
            dispatch(getAllCategories());
        }
    }, [dispatch])

    return (
        <div className={'left-menu'}>
            <div className={'header-1'}>
                <img className={'user'} src={user} alt={'user'}/>
                <p className={'p-center'}>Hello, Sign In</p>
            </div>
            <div className={'left-menu__section'}>
                <CategoriesMenuSection categories={categories}/>
            </div>
        </div>
    )
}

export default LeftMenu;