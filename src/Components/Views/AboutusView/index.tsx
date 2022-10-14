
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
            {/* <div className={`${style.divider}`}>
                <div className={`${style.sub_divider}`}>

                </div>
            </div> */}
            <div className={`${style.blockContainer}`}>
                <aside className={`${style.blockItem} ${style.blockBlue}`}>
                    <div className={`${style.imagegroup1_Container}`}>
                        <img alt="group1" src={group1} className={`${style.imageScaling}`} />
                        <img alt="group2" src={group2} className={`${style.imageScaling}`} />
                    </div>
                    <div  className={`${style.imagegroup2_Container}`}>
                        <img alt="circle1" src={circle1} className={`${style.image2Scaling1}`} />
                        <img alt="circle2" src={circle2} className={`${style.image2Scaling2}`} />
                    </div>
                    <div className={`${style.firstBlockContainer}`}>
                        <h1 className={`${style.title}`}>{t(`TM DOLONI-TOYS - Factory of children's happiness!`)}</h1>
                        <p className={`${style.desc}`}>{t(`Joyful children's eyes, cheerful carefree laughter, fulfillment of cherished wishes, and in addition to all this, the development, interest, deepening of skills and abilities of children - this, without a doubt, is our goal!`)}</p>
                        <p className={`${style.desc}`}>{t(`TM DOLONI-TOYS - surprises its customers with high quality products, an incredible level of service, proving itself as a proven assistant in a difficult task - creating children's happiness`)}</p>
                    </div>
                </aside>
                <aside className={`${style.blockItem} ${style.blockGreen}`}>
                <div className={`${style.imagegroup1_Container}`}>
                        <img alt="group21" src={group1} className={`${style.imageScaling}`} />
                        <img alt="group22" src={group3} className={`${style.imageScaling}`} />
                    </div>
                    <div className={`${style.imagegroup2_Container}`}>
                        <img alt="circle1" src={circle1} className={`${style.image2Scaling1}`} />
                        <img alt="circle2" src={circle2} className={`${style.image2Scaling2}`} />
                    </div>
                    <div className={`${style.firstBlockContainer}`}>
                        <h1 className={`${style.title}`}>{t(`VIP-TOYS company Ukrainian manufacturer of toys under the trademark DOLONI-TOYS`)}</h1>
                        <p className={`${style.desc}`}>{t(`We offer a wide range of different types of safe and interesting toys and goods for children for every taste and preference. Our children's toys, roller coasters, colorful constructors, sand toys, cars, motorbikes and many other wonderful toys can be useful to your child today. They will occupy the first place on the shelf of your store, and will be a worthy competition to foreign analogues.`)}</p>
                    </div>
                </aside>
                {/* <aside className={`${style.blockItem}`}>
                    <div className={`${style.lastBlockImage}`}>
                        <img alt="extend" src={extend} className={`${style.itemScaling}`} />
                    </div>
                    <div className={`${style.lbContainer}`}>
                        <h1 className={`${style.title}`}>{t(`Чому слід обрати "DOLONI-TOYS"?`)}</h1>
                        <div className={`${style.gridContainer}`}>
                            <div className={`${style.firstItem}`}>
                                <p className={`${style.content}`}>{t(`Наші товари якісні, захоплюючі, 100% безпечні!`)}</p>
                            </div>
                            <div className={`${style.secondItem}`}>
                                <p className={`${style.content}`}>{t(`Наші товари сертифіковані в Україні, Європейському Союзі, інших країнах!`)}</p>
                            </div>
                            <div className={`${style.thirdItem}`}>
                                <p className={`${style.content}`}>{t(`Кожна іграшка пройшла спец тестування і отримала схвалення самих скрупульозних користувачів - дітей!`)}</p>
                            </div>
                        </div>
                    </div>
                </aside> */}
            </div>
        </section>
    )
}