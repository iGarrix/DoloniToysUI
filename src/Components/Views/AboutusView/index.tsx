
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
                        <h1 className={`${style.title}`}>{t(`TM "DOLONI-TOYS" - Фабрика дитячого щастя!`)}</h1>
                        <p className={`${style.desc}`}>{t(`Радісні дитячі очі, веселий безтурботний сміх, здійснення заповітних бажань, а до всього цього розвиток, зацікавленість, поглиблення вмінь і навичок дітей - це, без сумніву, наша мета! `)}</p>
                        <p className={`${style.desc}`}>{t(`TM DOLONI-TOYS - дивує своїх клієнтів високою якістю продукції, неймовірним рівнем сервісу, зарекомендувавши себе як перевірений помічник в непростій справі - створенні дитячого щастя`)}</p>
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
                        <h1 className={`${style.title}`}>{t(`Компанія "ВІП-ТОЙС" Український виробник іграшок під торговою маркою "DOLONI-TOYS"`)}</h1>
                        <p className={`${style.desc}`}>{t(`Ми пропонуємо широкий асортимент різних видів безпечних і цікавих іграшок та товарів для дітей на будь-який смак та уподобання. 
                            Наші дитячі будтночки, гірки для катання, різнокольорові конструктори, іграшки для піску, машинки, мотобайки і багато інших чудових іграшок можуть вже сьогодні стати в нагоді Вашій дитині.
                            Займуть перше місце на полиці Вашого магазину, складе гідну конкуренцію закордонним аналогам.`)}</p>
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