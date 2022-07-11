import React, {FunctionComponent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './home-page.scss';
// components
import ACarousel from "../../reusable-components/ACarousel/ACarousel";
import ACard from "../../reusable-components/ACard/ACard";
// actions
import {getAllCategories} from "../../../redux/actions/categories";
// interfaces
import {IDispatchInterface} from "../../../interfaces/global";
import {ICategory} from "../../../interfaces/categories";
import {IState} from "../../../redux/store";
// HOC
import {isLoadingHOC, IBaseLoadableComponent} from "../../HOC/IsLoadingHOC";

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

interface IHomePage extends IBaseLoadableComponent {}

const HomePage: FunctionComponent<IHomePage> = ({setLoading}) => {

    const dispatch: IDispatchInterface = useDispatch();
    const categories = useSelector((state: IState) => state.categories.categories);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await dispatch(getAllCategories());
            setLoading(false);
        }
        fetchData()
    }, []);

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

export default isLoadingHOC(HomePage);