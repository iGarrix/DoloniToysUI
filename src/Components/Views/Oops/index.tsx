
import { useTranslation } from "react-i18next";
import styles from "./oops.module.scss";

const extend = require('../../../Assets/Icons/oopsextend.png');

export const Oops : React.FC = () => {
    const {t} = useTranslation();
    return (
        <section className={`${styles.oops}`}>
            <img alt="extend" src={extend} className={`${styles.extend}`} />
            <h1 className={styles.title}>{t("Something went wrong:")}</h1>
        </section>
    )
}