import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"
import { RedButton } from "../../../../Common/Buttons/RedButton";

import style from "./style.cmbt.module.scss";

const extend1 = require("../../../../../Assets/Icons/BannerExtend1.png");
const extend2 = require("../../../../../Assets/Icons/BannerExtend2.png");
const extend3 = require("../../../../../Assets/Icons/BannerExtend3.png");
const extend4 = require("../../../../../Assets/Icons/BannerExtend4.png");
const carousel2 = require("../../../../../Assets/Backgrounds/carousel2.png");

export const CarouselMainBannerTwo: React.FC = () => {

    const nav = useNavigate();
    const {t} = useTranslation();

    return (
        <div className={`${style.container}`}>
            <img alt="carousel2" src={carousel2} className="w-full h-full bg-cover object-cover" />
            {/* <div className={`${style.extendContainer}`}>
                <div><img alt="extend1" src={extend1}/></div>
                <div className={`${style.second}`}><img alt="extend2" src={extend2}/></div>
                <div className={`${style.third}`}><img alt="extend3" src={extend3}/></div>
                <div className={`${style.fourth}`}><img alt="extend4" src={extend4}/></div>
            </div>
            <div className={`${style.contentContainer}`}>
                <h1 className={`${style.title}`}>{t(`The new ones are interesting`)}<br></br>
                {t(`toys`)}<br></br>
                {t(`children directly in`)}<br></br>
                {t(`palms!`)}</h1>
                <p className={`${style.desc}`}>{t(`A great variety of toys`)} <br></br> {t(`right here and`)} <span className={`${style.link}`} onClick={() => {nav("/catalog")}}>{t(`now`)}</span></p>
                <div className={`${style.btnContainer}`}>
                    <RedButton title={t(`Catalog`)} onClick={() => {nav("/catalog")}}/>
                </div>
            </div> */}
        </div>
    )
}