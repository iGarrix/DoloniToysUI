
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RedButton } from "../../../../Common/Buttons/RedButton";
import style from "./style.carouselbannerone.module.scss";

const banner = require('../../../../../Assets/Backgrounds/Banner1.png');
const rocket = require('../../../../../Assets/Icons/rocket_.png');

export const CarouselMainBannerOne : React.FC = () => {

    const {t} = useTranslation();
    const nav = useNavigate();

    return (
        <div className={`${style.carouselbanner1}`}>
            <img alt="banner" src={banner} className={`${style.bannerimage}`} />
            {/* <section className={`${style.textbanner}`}>
                <aside className={`${style.headerbanner}`}>
                    <h1>{t(`We present`)}</h1>
                    <h1>{t(`new world`)}</h1>
                    <h1>{t(`ideas`)}</h1>
                </aside>
                <aside className={`${style.subheaderbanner}`}>
                    <p>{t(`Help your children`)}</p>
                    <p>{t(`plunge into the dimension`)} <span className={`${style.sublink}`} onClick={() => {nav("/catalog")}}>{t(`ideas and`)}</span></p>
                    <p><span className={`${style.sublink}`} onClick={() => {nav("/catalog")}}>{t(`fantasies`)}</span></p>
                </aside>
                <aside className="">
                    <RedButton title={t(`Catalog`)} onClick={() => {nav("/catalog")}} />
                </aside>
                <img alt="rocket" src={rocket} className={`${style.rocket}`} />
            </section> */}
        </div>
    )
}