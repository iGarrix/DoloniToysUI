import { ICarouselFullscreen } from "./types.carouselfullscreen"

import style from "./style.carouselfullscreen.module.scss";
import { useState, useEffect } from "react";
import { Guid } from "guid-typescript";

const next = require('../../../../Assets/Icons/Next.png');
const prev = require('../../../../Assets/Icons/Prev.png');

export const CarouselFullscreen : React.FC<ICarouselFullscreen> = ({...props}) => {

    const [carousel, setCarousel] = useState(() => {
        const carousel = window.document.getElementById("mainCarouselFull");
        if (carousel) {      
            return carousel;
        }
        return null;
    });
    const [left, setLeft] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const carousel = window.document.getElementById("mainCarouselFull");
        if (carousel) {      
            setCarousel(carousel);
            setLeft(0);
            carousel.scrollTo(0, 0);
        }
    }, []);

    function onNext() {
        if (carousel) {      
            setTimeout(() => {
                carousel.scrollTo(carousel.scrollLeft + (carousel.clientWidth), 0);
                setLeft(carousel.scrollLeft + (carousel.clientWidth));
                if (count < props.childrens.length - 1) {          
                    setCount(count + 1);
                }
            }, 500);
        }
    }

    function onPrev() {
        if (carousel) {      
            setTimeout(() => {
                carousel.scrollTo(carousel.scrollLeft - (carousel.clientWidth), 0);
                setLeft(carousel.scrollLeft - (carousel.clientWidth));
                if (count > 0) {             
                    setCount(count - 1);
                }
            }, 500);
        }
    }

    return (
        <div className={`${style.carouselFullContainer}`}>
            <div className={`${style.maincarouselFull}`} id="mainCarouselFull">
                {
                    props.childrens.map(item => {
                        return (
                            <div key={Guid.create().toString()} className={`${style.carouselFullItemImage}`}>
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
            <div className={`${style.counterContainer}`}>
                <div className={`${style.bodyContainer}`}>
                    {
                        props.childrens.map((item : any, key: number) => {
                            return (
                                <div key={key} className={`${style.bodyItem} ${key === count ? style.selected : null}`}></div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}