
import { useTranslation } from "react-i18next";
import { SectCardType } from "../../../Configurations/globals";
import { SectionCard } from "../Cards/SectionCard";
import style from "./style.section.module.scss";

export const Section : React.FC = () => {

    const {t} = useTranslation();

    return (
        <section className={`${style.section}`} id="#sect_block">
            <h1 className={`${style.title}`}>{t(`Section`)}</h1>
            <aside className={`${style.sect_cards}`}>
                <SectionCard title={t(`Childrens`)} variant={SectCardType.Baby} onClick={() => {console.log(`fgjhfg`)}} />
                <SectionCard title={t(`Girls`)} variant={SectCardType.Girls} onClick={() => {console.log(`fgjhfg`)}} />
                <SectionCard title={t(`Boys`)} variant={SectCardType.Boys} onClick={() => {console.log(`fgjhfg`)}} />
            </aside>
        </section>
    )
}