
import { RedButton } from "../../../../Common/Buttons/RedButton";
import style from "./style.carouselbannerone.module.scss";

const banner = require('../../../../../Assets/Backgrounds/Banner1.png');
const rocket = require('../../../../../Assets/Icons/rocket_.png');

export const CarouselMainBannerOne : React.FC = () => {
    return (
        <div className={`${style.carouselbanner1}`}>
            <img alt="banner" src={banner} className={`${style.bannerimage}`} />
            <section className={`${style.textbanner}`}>
                <aside className={`${style.headerbanner}`}>
                    <h1>Представляємо</h1>
                    <h1>новий світ</h1>
                    <h1>ідей</h1>
                </aside>
                <aside className={`${style.subheaderbanner}`}>
                    <p>Допоможіть своїм дітям</p>
                    <p>поринути у вимір <span className={`${style.sublink}`}>ідей і</span></p>
                    <p><span className={`${style.sublink}`}>фантазій</span></p>
                </aside>
                <aside>
                    <RedButton title={"Каталог"} onClick={() => {console.log(`go`);}} />
                </aside>
                <img alt="rocket" src={rocket} className={`${style.rocket}`} />
            </section>
        </div>
    )
}