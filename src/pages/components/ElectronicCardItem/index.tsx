import styles from './ElectronicCardItem.module.scss';
import addInfo from '../../../public/icons/addInfo.svg';

interface IElectronicCarditem {
    title: string;
    icon?: string;
    text: JSX.Element;
}

const ElectronicCardItem = ({ title, icon, text }: IElectronicCarditem) => {
    return (
        <div className={styles.electronicCardItem}>
            <div className={styles.electronicCardItem_imageWrapper}>
                <img src={icon} alt='Информация о пациенте' />
            </div>
            <div className={styles.electronicCardItem_infoWrapper}>
                <h4 className={styles.electronicCardItem_title}>{title}</h4>
                <div className={styles.electronicCardItem_descr}>{text}</div>
            </div>
        </div>
    );
};

export default ElectronicCardItem;
