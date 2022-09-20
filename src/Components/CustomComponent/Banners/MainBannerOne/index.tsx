import React from "react";

import style from "./style.mainbannerone.module.scss";

const banner1 = require('../../../../Assets/Backgrounds/Banner2.png');

export const MainBannerOne : React.FC = () => {
    return (
        <div className={`${style.mainbannerone}`}>
            <aside className={`${style.gridside}`}>
                <section className={`${style.grid_item}`}>
                    <img alt="banner2" src={banner1} className={`${style.imgbanner_1}`} />
                </section>
                <section className={`${style.grid_item_2}`}>
                    <h1 className={`${style.title}`}>Ми створюємо все разом для вас</h1>
                    <p className={`${style.desc}`}>
                        Ми робимо іграшки для вас. Наші майстри трудяться день і ніч щоб зробити вашим дітям найкращі іграшки.
                    </p>
                </section>
            </aside>
        </div>
    )
}