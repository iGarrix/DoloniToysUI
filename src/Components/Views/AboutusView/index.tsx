
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./style.aboutus.module.scss";

const parent = require('../../../Assets/Backgrounds/parent.png');
const group1 = require('../../../Assets/Icons/group_aboutus1.png');
const group2 = require('../../../Assets/Icons/group_aboutus2.png');
const group3 = require('../../../Assets/Icons/group_aboutus3.png');
const circle1 = require('../../../Assets/Icons/circle1.png');
const circle2 = require('../../../Assets/Icons/circle2.png');
const extend = require('../../../Assets/Icons/extend_group.png');

export const AboutusView : React.FC = () => {

    const {t} = useTranslation();

    return (
        <section className={`${style.aboutusContainer}`}>
            <div className={`${style.imageContainer}`}>
                <img alt="parent" src={parent} className={`${style.image}`}/>
            </div>
            <div className={`${style.blockContainer}`}>
                <aside className={`${style.blockItem} ${style.blockBlue}`}>
                    <div className={`${style.firstBlockContainer}`}>
                        <h1 className={`${style.title}`}>{t(`TM DOLONI - Factory of children's happiness!`)}</h1>
                        <p className={`${style.desc}`}>{t(`Joyful children's eyes, cheerful carefree laughter, fulfillment of cherished wishes, and in addition to all this, the development, interest, deepening of skills and abilities of children - this, without a doubt, is our goal!`)}</p>
                        <p className={`${style.desc}`}>{t(`TM DOLONI - surprises its customers with high quality products, an incredible level of service, proving itself as a proven assistant in a difficult task - creating children's happiness`)}</p>
                    </div>
                </aside>
                <aside className={`${style.blockItem} ${style.blockGreen}`}>
                    <div className={`${style.firstBlockContainer}`}>
                        <p className={`${style.desc}`}>{t(`We offer a wide range of different types of safe and interesting toys and goods for children for every taste and preference. Our children's toys, roller coasters, colorful constructors, sand toys, cars, motorbikes and many other wonderful toys can be useful to your child today. They will occupy the first place on the shelf of your store, and will be a worthy competition to foreign analogues.`)}</p>
                    </div>
                </aside>
            </div>
        </section>
    )
}