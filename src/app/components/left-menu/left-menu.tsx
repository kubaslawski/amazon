import React from "react";
import './left-menu.scss';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
// interfaces
import {ICategory} from "../../../interfaces/categories";
// icons/photos
import user from "../../images/user.png";
import next from '../../../icons/next.png';


const LeftMenu: React.FC = () => {

    const categories: Array<ICategory> = useSelector((state: any) => state.categories.categories);

    return (
        <div className={'left-menu'}>
            <div className={'header-1'}>
                <img className={'user'} src={user} alt={'user'}/>
                <p className={'p-center'}>Hello, Sign In</p>
            </div>
            <div className={'left-menu__section'}>
                <section className={'categories-display'}>
                    <p className={'left-menu__p-title'}>Categories:</p>
                    {categories?.map((obj: ICategory, index: number) => {
                        return (
                            <Link
                                key={index}
                                to={{
                                    pathname: `/category/${obj.pk}`
                                }}>
                                <div className={'flex left-menu__p-container'}>
                                    <p className={'left-menu__p-normal'} >{obj.label}</p>
                                    <img className={'left-menu__arrow-right'} src={next} alt={'next'}/>
                                </div>
                            </Link>
                        )
                    })}
                </section>
            </div>
        </div>
    )
}

export default LeftMenu;