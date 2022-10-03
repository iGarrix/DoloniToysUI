
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
    return (
        <section className={`${style.forpartnersContainer}`}>
            <aside className={`${style.firstContainer}`}>
                <div className={`${style.extendImageContainer}`}>
                    <img alt="extendgroup" src={extend} className={`${style.extendImage}`} />
                </div>
                <img alt="biglogo" src={biglogo} className={`${style.biglogo}`} />
                <div className={`${style.titleContainer}`}>
                    <h1 className={`${style.title}`}>TM «DOLONI»</h1>
                    <h1 className={`${style.title}`}>фабрика дитячого щастя!</h1>
                </div>
                <div className={`${style.descContainer}`}>
                    <p className={`${style.desc}`}>Дитячі будиночки, гірки для катання, яскраві конструктори, машинки, мотобайки, – про, що тільки не мріють малюки.
                        Перед батьками нерідко виникає дилема, як обрати безпечні якісні та цікаві дитячі товари для свого малюка? На
                        допомогу готова прийти команда TM Doloni. Це один з найбільших виробників товарів для дітей в Україні та Європі.
                        Компанія на ринку уже більше 10-ти років. Співпрацює з партнерами у 24 країнах світу.</p>
                </div>
            </aside>
            <aside className={`${style.secondContainer}`}>
                <div className={`${style.extendImageContainer}`}>
                    <img alt="scope" src={scope} />
                    <img alt="star" src={star} />
                </div>
                <p className={`${style.title}`}>Місія <strong>ТМ Doloni</strong> – дарувати щасливе дитинство усім малюкам. Тому нашим пріоритетом є створення доступних, а
                    головне якісних товарів для дітей. Що важливо, малюки й самі долучаються до їх створення. Наші дитячі товари
                    сприяють розвитку малюків, прояву їхньої фантазії, винахідливості, інтелектуальних, фізичних та творчих здібностей.
                    Вони допомагають у пізнанні навколишнього світу та розширенні кругозору</p>
            </aside>
            <aside className={`${style.thirdContainer}`}>
                <div className={`${style.extendImageContainer}`}>
                    <img alt="scope" src={scope} />
                    <img alt="star" src={star} />
                </div>
                <p className={`${style.title}`}><strong>ТМ Doloni</strong> пропонує широкий асортимент різних товарів для дітей на буть-який смак та уподобання. Для виробництва
                    іграшок використовується винятково безпечна сировина що відповідає міжнародними стандартами. </p>
            </aside>
            <aside className={`${style.fourthContainer}`}>
                <div className={`${style.extendGridContainer}`}>
                    <img alt="bg10" src={bg10} className={`${style.image}`} />
                    <div className={`${style.titleContainer}`}>
                        <p className={`${style.title}`}>Над створенням продукції працює команда кваліфікованих: розробників, конструкторів, дизайнерів і маркетологів. Усі
                            моделі наших товарів – унікальні, адже схвалені найвибагливішими експертами – малюками.</p>
                    </div>
                </div>
            </aside>
            <aside className={`${style.fifethContainer}`}>
                <p className={`${style.title}`}>Серед наших переваг</p>
                <div className={`${style.itemGridContainer}`}>
                    <div className={`${style.firstItem}`}>
                        <p className={`${style.desc}`}>широкий асортимент товарів</p>
                    </div>
                    <div className={`${style.secondItem}`}>
                        <p className={`${style.desc}`}>гнучкість виробництва</p>
                    </div>
                    <div className={`${style.thirdItem}`}>
                        <p className={`${style.desc}`}>інноваційний підхід</p>
                    </div>
                    <div className={`${style.fourthItem}`}>
                        <p className={`${style.desc}`}>якісна безпечна сировина</p>
                    </div>
                    <div className={`${style.fifethItem}`}>
                        <p className={`${style.desc}`}>доступна цінова політика</p>
                    </div>
                    <div className={`${style.sixthItem}`}>
                        <p className={`${style.desc}`}>сертифікована продукція.</p>
                    </div>
                </div>
            </aside>
            <aside className={`${style.sixthContainer}`}>
                <div className={`${style.imageItem}`}>
                    <img alt="mother" src={mother} className={`${style.imageItem}`} />
                </div>
                <div className={`${style.contentContainer}`}>
                    <div className={`${style.extendImageContainer}`}>
                        <img alt="group1" src={group1} className={`${style.imageItem}`} />
                        <img alt="group2" src={group2} className={`${style.imageItem}`} />
                    </div>
                    <p className={`${style.desc}`}>Наші товари обирають дбайливі батьки, які бажають бути впевнені в безпеці своїх дітей.
                        Динамічно розвиватися і досягати успіху на ринку нам дозволяє власна етика бізнесу. Саме
                        вона формує довіру до нас ділових партнерів, клієнтів та співробітників. Ми впевнені, що
                        завдяки цим принципам ми разом зможемо сьогодні стати кращими, ніж учора, і завтра -
                        будемо кращими, ніж сьогодні!</p>
                </div>
            </aside>
            <aside className={`${style.seventhContainer}`}>
                <div className={`${style.contentContainer}`}>
                    <div className={`${style.extendImageContainer}`}>
                        <img alt="group3" src={group2} className={`${style.imageItem}`} />
                        <img alt="group4" src={group3} className={`${style.imageItem}`} />
                    </div>
                    <div className={`${style.content}`}>
                        <h1 className={`${style.title}`}>Doloni Іновацій</h1>
                        <p className={`${style.desc}`}>Наші товари обирають дбайливі батьки, які бажають бути впевнені в безпеці своїх дітей.
                            Динамічно розвиватися і досягати успіху на ринку нам дозволяє власна етика бізнесу. Саме
                            вона формує довіру до нас ділових партнерів, клієнтів та співробітників. Ми впевнені, що
                            завдяки цим принципам ми разом зможемо сьогодні стати кращими, ніж учора, і завтра -
                            будемо кращими, ніж сьогодні!</p>
                    </div>
                </div>
                <div className={`${style.imageContainer}`}>
                    <img alt="mother2" src={mother2} className={`${style.imageItem}`} />
                </div>
            </aside>
        </section>
    )
}