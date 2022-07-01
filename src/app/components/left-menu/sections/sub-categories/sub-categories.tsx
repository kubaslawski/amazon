import React from "react";
import {Link} from "react-router-dom";
// interfaces
import {ISubCategory} from "../../../../../interfaces/categories";

interface ISubCategoriesMenuSection {
    sub_categories: Array<ISubCategory>
}

const SubCategoriesMenuSection: React.FC<ISubCategoriesMenuSection> = ({sub_categories}) => {
    return (
        <div className={'left-menu__p-container-2'}>
            {sub_categories.map((obj) => {
                return (
                    <Link
                        key={`sub_category${obj.title}`}
                        to={{
                            pathname: `/sub_category/${obj.title}`
                        }}
                    >
                        <p className={'left-menu__p-normal-2'}>
                            {obj.title}
                        </p>
                    </Link>
                )
            })}
        </div>
    )
}

export default SubCategoriesMenuSection;