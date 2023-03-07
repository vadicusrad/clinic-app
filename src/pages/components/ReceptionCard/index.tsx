import { IAppointment } from '../../../features/appointmentsSlice';
import styles from './ReceptionCard.module.scss';

interface IReceptionCard {
    data: IAppointment;
}

const ReceptionCard = ({ data }: IReceptionCard) => {
    const { date, avatar, name, address, department } = data;

    return (
        <div className={styles.card}>
            <div className={styles.card__descWrapper}>
                <div className={styles.card__date}>
                    {new Date(date).toLocaleDateString()} |{' '}
                    {new Date(date).toLocaleTimeString([], {
                        timeStyle: 'short',
                    })}
                </div>
                <div className={styles.card__address}>{address}</div>
                <div className={styles.card__doctor}>
                    <img
                        className={styles.card__doctor_avatar}
                        src={avatar}
                        alt='avatar'
                        width={50}
                        height={50}
                    />

                    <div className={styles.card__doctor_descr}>
                        <div className={styles.card__doctor_name}>{name}</div>
                        <div className={styles.card__doctor_department}>
                            {department}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.card__btnWrapper}>
                <button className={styles.card__cancelBtn}>Отменить</button>
            </div>
        </div>
    );
};

export default ReceptionCard;
