import { Fragment, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../Redux/hooks/hooks"
import { GetAllCategory } from "../../../Redux/reducers/categoryReducer/action";
import { MainBannerOne } from "../../CustomComponent/Banners/MainBannerOne";
import { SimpleMainBanner } from "../../CustomComponent/Banners/SimpleMainBanner";
import { Carousel } from "../../CustomComponent/Carousels/Carousel";
import { CarouselFullscreen } from "../../CustomComponent/Carousels/CarouselFullscreen";
import { MainFooter } from "../../CustomComponent/Footers/MainFooter";
import { RecommendBlock } from "../../CustomComponent/RecommendBlock";
import { Section } from "../../CustomComponent/Section";

import style from "./style.main.module.scss";
const bg1 = require('../../../Assets/Backgrounds/bg1.jpg');
const bg2 = require('../../../Assets/Backgrounds/bg2.jpg');
const bg3 = require('../../../Assets/Backgrounds/bg3.jpg');
const bg4 = require('../../../Assets/Backgrounds/bg4.jpg');
const bg5 = require('../../../Assets/Backgrounds/bg5.jpg');

const mbg1 = require('../../../Assets/Backgrounds/bg6.jpg');
const mbg2 = require('../../../Assets/Backgrounds/bg7.jpg');
const mbg3 = require('../../../Assets/Backgrounds/bg8.jpg');
// const mbg1 = require('../../../Assets/Backgrounds/mini_banner1.png');
// const mbg2 = require('../../../Assets/Backgrounds/mini_banner2.png');
// const mbg3 = require('../../../Assets/Backgrounds/mini_banner3.png');

const banner1 = require('../../../Assets/Backgrounds/Banner1.jpg');
const banner2 = require('../../../Assets/Backgrounds/Banner2.jpg');
const banner3 = require('../../../Assets/Backgrounds/Banner3.jpg');
const banner4 = require('../../../Assets/Backgrounds/Banner4.jpg');
const banner5 = require('../../../Assets/Backgrounds/Banner5.jpg');

export const MainView: React.FC = () => {

    const dispatch = useAppDispatch();
    const rf = useRef<HTMLDivElement | any>();
    const nav = useNavigate();

    useEffect(() => {
        rf.current?.scrollIntoView({ behavior: "smooth", block: 'center' })
    }, []);

    function selectCatalog(title: string) {
        nav(`/catalog/` + title);
    }

    return (
        <section className="flex flex-col bg-light">
            <CarouselFullscreen selectedIndex={0} images={[banner1, banner2, banner3, banner4, banner5]} />
            <section className={`${style.slidercarouserContainer}`} id="main_carousel">
                {/* <Carousel childrens={
                    [
                        {
                            children: <div className={`${style.carouselChildContainer}`}>
                                <img alt="bg1" src={bg1} className="object-cover bg-cover rounded-[15px] mm:rounded-none sm:rounded-none md:rounded-none w-[320px] h-[320px] mm:w-screen sm:w-screen md:w-screen" />
                            </div>,
                        },
                        {
                            children: <div className={`${style.carouselChildContainer}`}>
                                <img alt="bg1" src={bg2} className="object-cover bg-cover rounded-[15px] mm:rounded-none sm:rounded-none md:rounded-none w-[320px] h-[320px] mm:w-screen sm:w-screen md:w-screen" />
                            </div>,
                        },
                        {
                            children: <div className={`${style.carouselChildContainer}`}>
                                <img alt="bg1" src={bg3} className="object-cover bg-cover rounded-[15px] mm:rounded-none sm:rounded-none md:rounded-none w-[320px] h-[320px] mm:w-screen sm:w-screen md:w-screen" />
                            </div>,
                        },
                        {
                            children: <div className={`${style.carouselChildContainer}`}>
                                <img alt="bg1" src={bg4} className="object-cover bg-cover rounded-[15px] mm:rounded-none sm:rounded-none md:rounded-none w-[320px] h-[320px] mm:w-screen sm:w-screen md:w-screen" />
                            </div>,
                        },
                        {
                            children: <div className={`${style.carouselChildContainer}`}>
                                <img alt="bg1" src={bg5} className="object-cover bg-cover rounded-[15px] mm:rounded-none sm:rounded-none md:rounded-none w-[320px] h-[320px] mm:w-screen sm:w-screen md:w-screen" />
                            </div>,
                        },
                        {
                            children: <div className={`${style.carouselChildContainer}`}>
                                <img alt="bg1" src={bg6} className="object-cover bg-cover rounded-[15px] mm:rounded-none sm:rounded-none md:rounded-none w-[320px] h-[320px] mm:w-screen sm:w-screen md:w-screen" />
                            </div>,
                        },
                        {
                            children: <div className={`${style.carouselChildContainer}`}>
                                <img alt="bg1" src={bg7} className="object-cover bg-cover rounded-[15px] mm:rounded-none sm:rounded-none md:rounded-none w-[320px] h-[320px] mm:w-screen sm:w-screen md:w-screen" />
                            </div>,
                        },
                        {
                            children: <div className={`${style.carouselChildContainer}`}>
                                <img alt="bg1" src={bg8} className="object-cover bg-cover rounded-[15px] mm:rounded-none sm:rounded-none md:rounded-none w-[320px] h-[320px] mm:w-screen sm:w-screen md:w-screen" />
                            </div>,
                        },
                        {
                            children: <div className={`${style.carouselChildContainer}`}>
                                <img alt="bg1" src={bg9} className="object-cover bg-cover rounded-[15px] mm:rounded-none sm:rounded-none md:rounded-none w-[320px] h-[320px] mm:w-screen sm:w-screen md:w-screen" />
                            </div>,
                        },

                    ]
                } /> */}
                <img alt="bg1" src={bg1} className={`${style.item}`} />
                <img alt="bg1" src={bg3} className={`${style.item}`} />
                <img alt="bg1" src={bg4} className={`${style.item}`} />
                <img alt="bg1" src={bg2} className={`${style.item}`} />
                <img alt="bg1" src={bg5} className={`${style.item}`} />
            </section>
            <section className={`${style.thirdblockImages}`}>
                <img alt="mbg1" src={mbg1} className={`${style.item}`}/>
                <img alt="mbg2" src={mbg2} className={`${style.item}`}/>
                <img alt="mbg3" src={mbg3} className={`${style.item}`}/>
            </section>
            <RecommendBlock />
            {/* <Section /> */}
            {/* <MainBannerOne /> */}
            <SimpleMainBanner />
        </section>
    )
}