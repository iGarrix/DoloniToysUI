
import { RecCardType } from "../../../Configurations/globals";
import { RecommendCard } from "../Cards/RecommendCard";
import style from "./style.recblock.module.scss";

export const RecommendBlock : React.FC = () => {
    return (
        <section className={`${style.recblock}`}>
            <h1 className={`${style.titleblock}`}>Чого ви маєте обрати нас?</h1>
            <aside className={`${style.cardblock}`}>
                <RecommendCard title={"Великий вибір товарів"} variant={RecCardType.Gift} />
                <RecommendCard title={"Багато позитивних відгуків"} variant={RecCardType.Like} />
                <RecommendCard title={"Іграшки з всього світу"} variant={RecCardType.Geograph} />
            </aside>
        </section>
    )
}