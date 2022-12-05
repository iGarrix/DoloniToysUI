
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Player } from "video-react";
import style from "./style.aboutus.module.scss";

const parent = require('../../../Assets/Backgrounds/parent.png');
const aboutus = require('../../../Assets/Icons/aboutus_cube.png');
const video = require('../../../Assets/Backgrounds/aboutusvideo.mp4');

const bg1 = require('../../../Assets/Backgrounds/aboutus1.jpg');
const bg2 = require('../../../Assets/Backgrounds/aboutus2.jpg');
const bg3 = require('../../../Assets/Backgrounds/aboutus3.jpg');

export const AboutusView : React.FC = () => {

    const {t} = useTranslation();

    return (
        <section className={`${style.aboutusContainer}`}>
            <div className={`${style.imageContainer}`}>
                <img alt="parent" src={parent} className={`${style.image}`}/>
            </div>
            <div className={`${style.blockContainer}`}>
                <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center mm:hidden sm:hiddem md:hidden">
                    {/* <img alt="parent" src={aboutus} className=""/> */}
                </div>
                <aside className={`${style.blockItem} ${style.blockBlue}`}>
                    <div className={`${style.firstBlockContainer}`}>
                        <h1 className={`${style.title}`}>{t(`TM DOLONI - Factory of children's happiness!`)}</h1>
                        <p className={`${style.desc}`}>{t(`Joyful children's eyes, cheerful carefree laughter, fulfillment of cherished wishes, and in addition to all this, the development, interest, deepening of skills and abilities of children - this, without a doubt, is our goal!`)}</p>
                        <p className={`${style.desc}`}>{t(`TM DOLONI - surprises its customers with high quality products, an incredible level of service, proving itself as a proven assistant in a difficult task - creating children's happiness`)}</p>
                    </div>
                </aside>
                <div className="w-full flex justify-center bg-bluesky-100">
                    <div className="grid grid-cols-3 mm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-[20px]">
                        <img alt="bg1" src={bg1} className="rounded-[15px] w-[300px] h-[300px] object-cover"/>
                        <img alt="bg2" src={bg2} className="rounded-[15px] w-[300px] h-[300px] object-cover"/>
                        <img alt="bg3" src={bg3} className="rounded-[15px] w-[300px] h-[300px] object-cover"/>
                    </div>
                </div>
                <aside className={`${style.blockItem} ${style.blockGreen}`}>
                    <div className={`${style.firstBlockContainer}`}>
                        <p className={`${style.desc}`}>{t(`We offer a wide range of different types of safe and interesting toys and goods for children for every taste and preference. Our children's toys, roller coasters, colorful constructors, sand toys, cars, motorbikes and many other wonderful toys can be useful to your child today. They will occupy the first place on the shelf of your store, and will be a worthy competition to foreign analogues.`)}</p>
                    </div>
                </aside>
                <div className="flex justify-center items-center bg-bluesky-100 pb-[20px]">
                    <video  height="80vh" className="h-[80vh] z-10" controls={true} >
                        <source src={video} type="video/mp4" />
                    </video> 
                </div>
                {/* <Player>
                    <source src={video} />
                </Player> */}
            </div>
        </section>
    )
}