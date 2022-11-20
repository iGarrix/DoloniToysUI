
import { useTranslation } from "react-i18next";
import { RecCardType } from "../../../Configurations/globals";
import { RecommendCard } from "../Cards/RecommendCard";
import style from "./style.recblock.module.scss";

export const RecommendBlock : React.FC = () => {

    const {t} = useTranslation();

    return (
        <section className={`${style.recblock}`} id="#rec_block">
            <h1 className={`${style.titleblock}`}>{t(`Why should you choose us?`)}</h1>
            <aside className={`${style.cardblock}`}>
                <RecommendCard title={t(`A large selection of products`)} variant={RecCardType.Gift} />
                <RecommendCard title={t(`Many positive reviews`)} variant={RecCardType.Like} />
                <RecommendCard title={t(`Toys from the manufacturer of children's happiness`)} variant={RecCardType.Geograph} />
            </aside>
        </section>
    )
}