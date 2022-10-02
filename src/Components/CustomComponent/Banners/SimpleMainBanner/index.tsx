
import { useTranslation } from "react-i18next";
import style from "./style.simplemainbanner.module.scss";

const banner = require('../../../../Assets/Backgrounds/Banner3.png');
//const group_sect_4 = require('../../../../Assets/Icons/group_sect4.png');
const group_sectsub_4 = require('../../../../Assets/Icons/group_sectsub4.png');
const group_sectsub_44 = require('../../../../Assets/Icons/group_sectsub44.png');

export const SimpleMainBanner : React.FC = () => {

    const {t} = useTranslation();

    return (
        <section className={`${style.simplemainbanner}`}>
            <aside className={`${style.firstside}`}>
                <div className={`${style.groupimagecontainer}`}>
                    <img alt="group_sectsub4" src={group_sectsub_4} className={`${style.groupimage1}`} />
                    <img alt="group_sectsub44" src={group_sectsub_44} className={`${style.groupimage2}`} />
                </div>
                <h1 className={`${style.title}`}>{t(`Dive into the exciting world of toys`)}</h1>
                <p className={`${style.desc}`}>{t(`Order toys from us and get a lot of exciting, incredible and educational products right now.`)}</p>
            </aside>
            <aside className={`${style.secondside}`}>
                <img alt="banner3" src={banner} className={`${style.banner_3_img}`}  />
            </aside>
        </section>
    )
}