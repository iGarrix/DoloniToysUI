
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import style from "./style.footer.module.scss";


const logo = require('../../../../Assets/Logo.png')

export const MainFooter: React.FC = () => {

    const nav = useNavigate();
    const { t } = useTranslation();

    function onScroll(id: string) {
        if (id) {
            window.document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center", });
        }
    }

    function onNavigateWithScroll(path: string, id: string | null) {
        nav(path);
        if (id) {
            window.document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center", });
        }
    }

    return (
        <div className={`${style.footerWrapper}`}>
            <div className={`${style.logoWrapper}`}>
                <img alt="logo" src={logo} width={200} height={200} />
            </div>
            <footer className={`${style.footer}`}>
                <div className={`${style.footer_item}`}>
                    <strong>{t(`Home`)}</strong>
                    <ol className={`${style.list}`}>
                        <li onClick={() => { nav("/catalog") }}>{t(`Catalog`)}</li>
                        <li onClick={() => { onNavigateWithScroll("/", "#rec_block") }}>{t(`Why you should choose us?`)}</li>
                        {/* <li onClick={() => {onNavigateWithScroll("/", "#sect_block")}}>{t(`Section`)}</li> */}
                    </ol>
                </div>
                <div className={`${style.footer_item}`}>
                    <strong>{t(`About us`)}</strong>
                    <ol className={`${style.list}`}>
                        <li onClick={() => { onNavigateWithScroll("/about", null) }}>{t(`Who am me?`)}</li>
                        <li onClick={() => { onNavigateWithScroll("/about", null) }}>{t(`What's are we doing?`)}</li>
                        <li onClick={() => { onNavigateWithScroll("/for-partners", null) }}>{t(`For partners`)}</li>
                    </ol>
                </div>
                {/* <div className={`${style.footer_item}`}>
                    <strong>{t(`Contacts`)}</strong>
                    <ol className={`${style.list}`}>
                        <li onClick={() => { onNavigateWithScroll("/contact-us", null) }}>{t(`Email`)}</li>
                        <li onClick={() => { onNavigateWithScroll("/contact-us", null) }}>{t(`Contact number`)}</li>
                        <li onClick={() => { onNavigateWithScroll("/for-admins", null) }}>{t(`For admins`)}</li>
                    </ol>
                </div> */}
            </footer>
        </div>
    )
}