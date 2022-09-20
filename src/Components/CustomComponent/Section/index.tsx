
import { SectCardType } from "../../../Configurations/globals";
import { SectionCard } from "../Cards/SectionCard";
import style from "./style.section.module.scss";

export const Section : React.FC = () => {
    return (
        <section className={`${style.section}`}>
            <h1 className={`${style.title}`}>Розділи</h1>
            <aside className={`${style.sect_cards}`}>
                <SectionCard title={`Дітям`} variant={SectCardType.Baby} onClick={() => {console.log(`fgjhfg`)}} />
                <SectionCard title={`Дівчаткам`} variant={SectCardType.Girls} onClick={() => {console.log(`fgjhfg`)}} />
                <SectionCard title={`Хлопчикам`} variant={SectCardType.Boys} onClick={() => {console.log(`fgjhfg`)}} />
            </aside>
        </section>
    )
}