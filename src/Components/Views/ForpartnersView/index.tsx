
import { useTranslation } from "react-i18next";
import style from "./style.forpartners.module.scss";

const biglogo = require('../../../Assets/BigLogo.png');
const extend = require('../../../Assets/Icons/extend_group2.png');
const scope = require('../../../Assets/Icons/scope.png');
const star = require('../../../Assets/Icons/star.png');
const bg10 = require('../../../Assets/Backgrounds/bg10.jpg');
const mother = require('../../../Assets/Backgrounds/mother.png');
const mother2 = require('../../../Assets/Backgrounds/mother2.png');
const group1 = require('../../../Assets/Icons/group_partners1.png');
const group2 = require('../../../Assets/Icons/group_partners2.png');
const group3 = require('../../../Assets/Icons/group_partners3.png');

export const ForpartnersView: React.FC = () => {
    const {t} = useTranslation();
    return (
        <section className={`${style.forpartnersContainer}`}>
            <aside className={`${style.firstContainer}`}>
                <div className={`${style.extendImageContainer}`}>
                    <img alt="extendgroup" src={extend} className={`${style.extendImage}`} />
                </div>
                <img alt="biglogo" src={biglogo} className={`${style.biglogo}`} />
                <div className={`${style.titleContainer}`}>
                    <h1 className={`${style.title}`}>TM «DOLONI»</h1>
                    <h1 className={`${style.title}`}>{t("factory of children's happiness!")}</h1>
                </div>
                <div className={`${style.descContainer}`}>
                    <p className={`${style.desc}`}>{t("Children's houses, slides for skating, bright constructors, cars, motorbikes - what little kids dream about. Parents often have a dilemma, how to choose safe, high-quality and interesting children's products for their baby? The TM Doloni team is ready to help. It is one of the largest manufacturers of goods for children in Ukraine and Europe. The company has been on the market for more than 10 years. Cooperates with partners in 24 countries of the world.")}</p>
                </div>
            </aside>
            <aside className={`${style.secondContainer}`}>
                <div className={`${style.extendImageContainer}`}>
                    <img alt="scope" src={scope} />
                    <img alt="star" src={star} />
                </div>
                <p className={`${style.title}`}>{t("The mission of TM Doloni is to give a happy childhood to all children. Therefore, our priority is to create affordable, and most importantly, quality products for children. What is important, the kids themselves participate in their creation. Our children's products contribute to the development of children, the manifestation of their imagination, ingenuity, intellectual, physical and creative abilities. They help in learning about the surrounding world and broadening one's horizons")}</p>
            </aside>
            <aside className={`${style.thirdContainer}`}>
                <div className={`${style.extendImageContainer}`}>
                    <img alt="scope" src={scope} />
                    <img alt="star" src={star} />
                </div>
                <p className={`${style.title}`}>{t("TM Doloni offers a wide range of different products for children for every taste and preference. Exclusively safe raw materials that meet international standards are used for the production of toys.")}</p>
            </aside>
            <aside className={`${style.fourthContainer}`}>
                <div className={`${style.extendGridContainer}`}>
                    <img alt="bg10" src={bg10} className={`${style.image}`} />
                    <div className={`${style.titleContainer}`}>
                        <p className={`${style.title}`}>{t("A qualified team of developers, designers, designers and marketers works on the creation of products. All models of our products are unique, because they are approved by the most demanding experts - kids.")}</p>
                    </div>
                </div>
            </aside>
            {/* <aside className={`${style.fifethContainer}`}>
                <p className={`${style.title}`}>{t("Among our advantages")}</p>
                <div className={`${style.itemGridContainer}`}>
                    <div className={`${style.firstItem}`}>
                        <p className={`${style.desc}`}>{t("a wide range of products")}</p>
                    </div>
                    <div className={`${style.secondItem}`}>
                        <p className={`${style.desc}`}>{t("production flexibility")}</p>
                    </div>
                    <div className={`${style.thirdItem}`}>
                        <p className={`${style.desc}`}>{t("innovative approach")}</p>
                    </div>
                    <div className={`${style.fourthItem}`}>
                        <p className={`${style.desc}`}>{t("high-quality safe raw materials")}</p>
                    </div>
                    <div className={`${style.fifethItem}`}>
                        <p className={`${style.desc}`}>{t("affordable price policy")}</p>
                    </div>
                    <div className={`${style.sixthItem}`}>
                        <p className={`${style.desc}`}>{t("certified products.")}</p>
                    </div>
                </div>
            </aside> */}
            <aside className={`${style.sixthContainer}`}>
                <div className={`${style.imageItem}`}>
                    <img alt="mother" src={mother} className={`${style.imageItem}`} />
                </div>
                <div className={`${style.contentContainer}`}>
                    <div className={`${style.extendImageContainer}`}>
                        <img alt="group1" src={group1} className={`${style.imageItem}`} />
                        <img alt="group2" src={group2} className={`${style.imageItem}`} />
                    </div>
                    <p className={`${style.desc}`}>{t("Our products are chosen by caring parents who want to be sure of their children's safety. Our own business ethics allow us to dynamically develop and achieve success on the market. It is she who forms the trust of our business partners, clients and employees. We are sure that thanks to these principles, we will be able to become better today than yesterday, and tomorrow - we will be better than today!")}</p>
                </div>
            </aside>
            <aside className={`${style.seventhContainer}`}>
                <div className={`${style.contentContainer}`}>
                    <div className={`${style.extendImageContainer}`}>
                        <img alt="group3" src={group2} className={`${style.imageItem}`} />
                        <img alt="group4" src={group3} className={`${style.imageItem}`} />
                    </div>
                    <div className={`${style.content}`}>
                        <h1 className={`${style.title}`}>{t("Doloni Innovations")}</h1>
                        <p className={`${style.desc}`}>{t("Our company is a permanent participant of international specialized exhibitions. TM Doloni doesn't just hold a hand on the pulse of innovation, but also shapes trends itself.We are constantly expanding our own capacities and introducing the latest technologies")}</p>
                    </div>
                </div>
                <div className={`${style.imageContainer}`}>
                    <img alt="mother2" src={mother2} className={`${style.imageItem}`} />
                </div>
            </aside>
        </section>
    )
}