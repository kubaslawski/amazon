import React, {useState} from "react";
import './ACarousel.scss';
// icons
import next from '../../../icons/next.png';
import prev from '../../../icons/prev.png';


interface IACarousel {
    slides: any;
}

const ACarousel: React.FC<IACarousel> = ({slides}) => {

    const [current, setCurrent] = useState<number>(0);
    const length = slides.length;

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return (
        <section className={'a-carousel'}>
            <img src={prev} className={'left arrow'} onClick={prevSlide} alt={'left-arrow'}/>
            <img src={next} className={'right arrow'} onClick={nextSlide} alt={'right-arrow'}/>
            {slides.map((slide: any, index: any) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt={'carousel'} className={'image'}/>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ACarousel;