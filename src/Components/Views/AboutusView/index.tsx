
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./style.aboutus.module.scss";

const parent = require('../../../Assets/Backgrounds/parent.png');
const aboutus = require('../../../Assets/Icons/aboutus_cube.png');

export const AboutusView : React.FC = () => {

    const {t} = useTranslation();

    return (
        <section className={`${style.aboutusContainer}`}>
            <div className={`${style.imageContainer}`}>
                <img alt="parent" src={parent} className={`${style.image}`}/>
            </div>
            <div className={`${style.blockContainer}`}>
                <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center mm:hidden sm:hiddem md:hidden">
                    <img alt="parent" src={aboutus} className=""/>
                </div>
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