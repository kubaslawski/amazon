import React from "react";
import './categories.scss';
import {Link} from "react-router-dom";
// interfaces
import {ICategory} from "../../../../../interfaces/categories";
// icons
import next from "../../../../../icons/next.png";
import SubCategoriesMenuSection from "../sub-categories/sub-categories";

interface ICategoriesMenuSection {
    categories: Array<ICategory>
}

const CategoriesMenuSection: React.FC<ICategoriesMenuSection> = ({categories}) => {

    return (
        <section className={'categories-display'}>
            <p className={'left-menu__p-title'}>Categories:</p>
            {categories.map((obj: ICategory) => {
                return (
                    <div key={`category${obj.title}`}>
                        <Link
                            className={'global__link-1'}
                            to={{
                                pathname: `/category/${obj.pk}`
                            }}>
                            <div className={'flex left-menu__p-container'}>
                                <p className={'left-menu__p-normal'}>{obj.title}</p>
                                <img className={'left-menu__arrow-right'} src={next} alt={'next'}/>
                            </div>
                        </Link>
                        {obj.sub_categories && <SubCategoriesMenuSection sub_categories={obj.sub_categories}/>}
                    </div>
                )
            })}
        </section>
    )
}

export default CategoriesMenuSection;