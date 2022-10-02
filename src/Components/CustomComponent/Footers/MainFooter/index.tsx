
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import style from "./style.footer.module.scss";

export const MainFooter : React.FC = () => {

    const nav = useNavigate();
    const {t} = useTranslation();

    function onScroll(id: string) {
        if (id) {
            window.document.getElementById(id)?.scrollIntoView({behavior: "smooth",block: "center",});
        }
    }

    function onNavigateWithScroll(path: string, id: string | null) {
        nav(path);
        if (id) {
            window.document.getElementById(id)?.scrollIntoView({behavior: "smooth",block: "center",});
        }
    } 

    return (
        <footer className={`${style.footer}`}>
            <div className={`${style.footer_item}`}>
                <strong>{t(`Home`)}</strong>
                <ol className={`${style.list}`}>
                    <li onClick={() => {onScroll("#none")}}>{t(`Banners`)}</li>
                    <li onClick={() => {onScroll("#rec_block")}}>{t(`Email`)}</li>
                    <li onClick={() => {onScroll("#sect_block")}}>{t(`Section`)}</li>
                    <li onClick={() => {onScroll("main_carousel")}}>{t(`Carousel`)}</li>
                </ol>
            </div>
            <div className={`${style.footer_item}`}>
                <strong>{t(`About us`)}</strong>
                <ol className={`${style.list}`}>
                    <li onClick={() => {onNavigateWithScroll("/about", null)}}>{t(`Who am me?`)}</li>
                    <li onClick={() => {onNavigateWithScroll("/about", null)}}>{t(`What's are we doing?`)}</li>
                    <li onClick={() => {onNavigateWithScroll("/for-parents", null)}}>{t(`For partners`)}</li>
                </ol>
            </div>
            <div className={`${style.footer_item}`}>
                <strong>{t(`Catalog`)}</strong>
                <ol className={`${style.list}`}>
                    <li onClick={() => {onScroll("#sect_block")}}>{t(`Childrens`)}</li>
                    <li onClick={() => {onScroll("#sect_block")}}>{t(`Boys`)}</li>
                    <li onClick={() => {onScroll("#sect_block")}}>{t(`Girls`)}</li>
                </ol>
            </div>
            <div className={`${style.footer_item}`}>
                <strong>{t(`Contacts`)}</strong>
                <ol className={`${style.list}`}>
                    <li onClick={() => {onNavigateWithScroll("/contact-us", null)}}>{t(`Email`)}</li>
                    <li onClick={() => {onNavigateWithScroll("/contact-us", null)}}>{t(`Contact number`)}</li>
                    <li onClick={() => {onNavigateWithScroll("/for-admins", null)}}>{t(`For admins`)}</li>
                </ol>
            </div>
        </footer>
    )
}