import React, {useEffect} from "react";
import './home-page.scss';
// components
import ACarousel from "../../reusable-components/ACarousel/ACarousel";
import {useDispatch, useSelector} from "react-redux";
import {IDispatchInterface} from "../../../interfaces/global";
import {getAllCategories} from "../../../redux/actions/categories";
import ACard from "../../reusable-components/ACard/ACard";
import {ICategory} from "../../../interfaces/categories";


const carouselData = [
    {
        image: 'http://127.0.0.1:8000/media/banners/banner_1.jpg'
    },
    {
        image: 'http://127.0.0.1:8000/media/banners/banner_2.jpg'
    },
    {
        image: 'http://127.0.0.1:8000/media/banners/banner_3.jpg'
    },
    {
        image: 'http://127.0.0.1:8000/media/banners/banner_4.jpg'
    },
]

const HomePage: React.FC = () => {

    const dispatch: IDispatchInterface = useDispatch();
    const categories = useSelector((state: any) => state.categories.categories);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    return (
        <div className={'home-page'}>
            <ACarousel slides={carouselData}/>
            <div className={'home-page__content row'}>
                {categories?.map((obj: ICategory) => {
                    return (
                        <ACard title={obj.title} photo={obj.photo} pk={obj.pk} key={obj.pk + obj.title}/>
                    )
                })}
            </div>

        </div>
    )
}

export default HomePage;