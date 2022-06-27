import React from "react";
import './home-page.scss';
import ACarousel from "../../reusable-components/ACarousel/ACarousel";
// components


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

    return (
        <div>
            <ACarousel slides={carouselData}/>
        </div>
    )
}

export default HomePage;