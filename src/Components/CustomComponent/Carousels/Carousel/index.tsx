import {Guid} from "guid-typescript"
import { useEffect, useState } from "react";

import style from "./style.carousel.module.scss";
import { ICarousel } from "./types.carousel";

const next = require('../../../../Assets/Icons/Next.png');
const prev = require('../../../../Assets/Icons/Prev.png');

export const Carousel : React.FC<ICarousel> = ({...props}) => {

    const [carousel, setCarousel] = useState(() => {
        const carousel = window.document.getElementById("mainCarousel");
        if (carousel) {      
            return carousel;
        }
        return null;
    });
    const [left, setLeft] = useState(0);

    useEffect(() => {
        const carousel = window.document.getElementById("mainCarousel");
        if (carousel) {      
            setCarousel(carousel);
            setLeft(carousel.scrollLeft);
        }
    }, []);

    function onNext() {
        if (carousel) {      
            setTimeout(() => {
                carousel.scrollTo(carousel.scrollLeft + (carousel.clientWidth), 0);
                setLeft(carousel.scrollLeft + (carousel.clientWidth));
            }, 500);
        }
    }

    function onPrev() {
        if (carousel) {      
            setTimeout(() => {
                carousel.scrollTo(carousel.scrollLeft - (carousel.clientWidth), 0);
                setLeft(carousel.scrollLeft - (carousel.clientWidth));
            }, 500);
        }
    }

    return (
        <div className={`${style.carouselContainer}`}>
            <div className={`${style.maincarousel}`} id="mainCarousel">
                {
                    props.childrens.map(item => {
                        return (
                            <div key={Guid.create().toString()} className={`${style.carouselItemImage}`}>
                                {item.children}
                            </div>
                        )
                    })
                }
            </div>
                <div className={`${style.npbuttonContainer}`}>
                    <button className={`${style.npbutton} ${left === 0 ? "hidden" : "flex"}`} onClick={onPrev}>
                        <img alt="next" src={prev} />
                    </button>
                    <button className={`${style.npbutton} ml-auto`} onClick={onNext}>
                        <img alt="next" src={next} />
                    </button>
                </div>
        </div>
    )
}