import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom"
import { changeLanguage, LanguageType } from "../../../../Configurations/globals";

import styles from "./style.mainheader.module.scss";
const logo = require('../../../../Assets/Logo.png');
const ukr = require('../../../../Assets/Icons/ukraine.png');
const usa = require('../../../../Assets/Icons/usa.png');

//${isOpen ? "flex" : "hidden"}

export const MainHeader: React.FC = () => {

    const nav = useNavigate();
    const { t } = useTranslation();

    const [isOpen, setOpen] = useState(false);
    const history = useLocation();

    return (
        <div className="sticky left-0 top-0 z-[100]">
            <header className={`${styles.mainheader}`}>
                <aside>
                    <img alt="logo" src={logo} className={`${styles.logo}`} onClick={() => { nav("/") }} />
                </aside>
                <aside className={`${styles.minibutton}`}>
                    <FontAwesomeIcon icon={faBars} className="text-lg cursor-pointer" onClick={() => { setOpen(!isOpen) }} />
                </aside>
                <aside>
                    <ol className={`${styles.headernav}`}>
                        <li className={`${styles.headeritem} ${history.pathname === "/" ? styles.selected : ""}`} onClick={() => { nav('/') }}>{t(`Home`)}</li>
                        <li className={`${styles.headeritem} ${history.pathname === "/" ? styles.selected : ""}`} onClick={() => { nav('/catalog/Bob') }}>{t(`Catalog`)}</li>
                        <li className={`${styles.headeritem} ${history.pathname === "/about" ? styles.selected : ""}`} onClick={() => { nav('/about') }}>{t(`About us`)}</li>
                        <li className={`${styles.headeritem} ${history.pathname === "/for-partners" ? styles.selected : ""}`} onClick={() => { nav('/for-partners') }}>{t(`For partners`)}</li>
                        <li className={`${styles.headeritem} ${history.pathname === "/contact-us" ? styles.selected : ""}`} onClick={() => { nav('/contact-us') }}>{t(`Contacts`)}</li>
                    </ol>
                </aside>
                <aside className={`${styles.langside}`}>
                    <img alt="logo" src={ukr} className={`${styles.langicon}`} onClick={() => { changeLanguage(LanguageType.UA) }} />
                    <img alt="logo" src={usa} className={`${styles.langicon}`} onClick={() => { changeLanguage(LanguageType.EN) }} />
                </aside>
            </header>
            <div className={`${styles.miniheader} ${isOpen ? "translate-x-[0%]" : "translate-x-[-100%]"}`}>
                <ol className={`${styles.miniheadernav}`}>
                    <li className={`${styles.headeritem}`} onClick={() => { nav('/') }}>{t(`Home`)}</li>
                    <li className={`${styles.headeritem}`} onClick={() => { nav('/catalog/Bob') }}>{t(`Catalog`)}</li>
                    <li className={`${styles.headeritem}`} onClick={() => { nav('/about') }}>{t(`About us`)}</li>
                    <li className={`${styles.headeritem}`} onClick={() => { nav('/for-partners') }}>{t(`For partners`)}</li>
                    <li className={`${styles.headeritem}`} onClick={() => { nav('/contact-us') }}>{t(`Contacts`)}</li>
                </ol>
            </div>
        </div>
    )
}