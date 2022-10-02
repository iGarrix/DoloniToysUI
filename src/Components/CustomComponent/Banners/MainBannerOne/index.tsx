import React from "react";
import { useTranslation } from "react-i18next";

import style from "./style.mainbannerone.module.scss";

const banner1 = require('../../../../Assets/Backgrounds/Banner2.png');

export const MainBannerOne : React.FC = () => {

    const {t} = useTranslation();

    return (
        <div className={`${style.mainbannerone}`} id="#mainbanner1">
            <aside className={`${style.gridside}`}>
                <section className={`${style.grid_item}`}>
                    <img alt="banner2" src={banner1} className={`${style.imgbanner_1}`} />
                </section>
                <section className={`${style.grid_item_2}`}>
                    <h1 className={`${style.title}`}>{t(`We create everything together for you`)}</h1>
                    <p className={`${style.desc}`}>
                        {t(`We make toys for you. Our craftsmen work day and night to make the best toys for your children.`)}
                    </p>
                </section>
            </aside>
        </div>
    )
}