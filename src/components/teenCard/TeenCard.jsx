import styles from './TeenCard.module.css'
import arrowImg from '../../img/icons/arrow.svg'

const TeenCard = (properties) => {
    return (
        <div className={styles.teenCard}>
            <a href="#!" className={styles.teenCard__link} alt='teenCard'></a>
            <img className={styles.teenCard__img} src={properties.img} alt="Category" />
            <div className={styles.teenCard__body}>
                <div className={styles.teenCard__text}>
                    <div className={styles.teenCard__title}>{properties.title}</div>
                    <div className={styles.teenCard__muted}>Explore Now!</div>
                </div>
                <div className={styles.teenCard__icon}>
                    <img src={arrowImg} alt="arrow" />
                </div>
            </div>
        </div>
    );
}

export default TeenCard;