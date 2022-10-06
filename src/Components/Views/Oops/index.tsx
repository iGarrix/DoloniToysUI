
import styles from "./oops.module.scss";

const extend = require('../../../Assets/Icons/oopsextend.png');

export const Oops : React.FC = () => {
    return (
        <section className={`${styles.oops}`}>
            <img alt="extend" src={extend} className={`${styles.extend}`} />
            <h1 className={styles.title}>Щось пішло не так :)</h1>
        </section>
    )
}