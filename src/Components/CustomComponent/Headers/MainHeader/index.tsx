import { useNavigate } from "react-router-dom"

import styles from "./style.mainheader.module.scss";
const logo = require('../../../../Assets/Logo.png');
const ukr = require('../../../../Assets/Icons/ukraine.png');
const usa = require('../../../../Assets/Icons/usa.png');


export const MainHeader : React.FC = () => {

    const nav = useNavigate();

    return (
        <header className={`${styles.mainheader}`}>
            <aside>
                <img alt="logo" src={logo} className={`${styles.logo}`} />
            </aside>
            <aside>
                <ol className={`${styles.headernav}`}>
                    <li className={`${styles.headeritem}`}>Головна</li>
                    <li className={`${styles.headeritem}`}>Каталог</li>
                    <li className={`${styles.headeritem}`}>Про нас</li>
                    <li className={`${styles.headeritem}`}>Для батьків</li>
                    <li className={`${styles.headeritem}`}>Контакти</li>
                </ol>
            </aside>
            <aside className={`${styles.langside}`}>
                <img alt="logo" src={ukr} className={`${styles.langicon}`} />
                <img alt="logo" src={usa} className={`${styles.langicon}`} />
            </aside>
        </header>
    )
}