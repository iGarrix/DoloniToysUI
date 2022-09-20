
import style from "./style.simplemainbanner.module.scss";

const banner = require('../../../../Assets/Backgrounds/Banner3.png');

export const SimpleMainBanner : React.FC = () => {
    return (
        <section className={`${style.simplemainbanner}`}>
            <aside className={`${style.firstside}`}>
                <h1 className={`${style.title}`}>Нирніть в захоплевий світ іграшок</h1>
                <p className={`${style.desc}`}>Замовте іграшки в нас і отримайте безліч захоплюючих, неймовірних і розвиваючих товарів прямо зараз.</p>
            </aside>
            <aside className={`${style.secondside}`}>
                <img alt="banner3" src={banner} className={`${style.banner_3_img}`}  />
            </aside>
        </section>
    )
}