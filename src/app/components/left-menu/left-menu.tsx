import React from "react";
import './left-menu.scss';
import {useSelector} from "react-redux";
// components
import CategoriesMenuSection from "./sections/categories/categories";
// interfaces
import {ICategory} from "../../../interfaces/categories";
import {IState} from "../../../redux/store";
// icons/photos
import user from "../../images/user.png";



const LeftMenu: React.FC = () => {

    const categories: Array<ICategory> = useSelector((state: IState) => state.categories.categories);

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