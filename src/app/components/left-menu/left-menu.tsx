import React from "react";
import './left-menu.scss';
import {useSelector} from "react-redux";
// interfaces
import {ICategory} from "../../../interfaces/categories";
// icons/photos
import user from "../../images/user.png";
import CategoriesMenuSection from "./sections/categories/categories";


const LeftMenu: React.FC = () => {

    const categories: Array<ICategory> = useSelector((state: any) => state.categories.categories);

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