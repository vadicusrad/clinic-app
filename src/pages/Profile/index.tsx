import ElectronicCardItem from '../components/ElectronicCardItem';
import ReceptionCard from '../components/ReceptionCard';
import styles from './Profile.module.scss';
import addInfo from '../../icons/addInfo.svg';
import patientInfo from '../../icons/patientInfo.svg';
import testTubes from '../../icons/testTubes.svg';
import receptionHistory from '../../icons/receptionHistory.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchAppointments } from '../../features/appointmentsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

export default function Profile() {
    const dispatch = useAppDispatch();
    const myAppointments = useAppSelector(
        (state) => state.appointments.appointments
    );
    useEffect(() => {
        dispatch(fetchAppointments());
    }, [dispatch]);

    return (
        <div className={styles.profile}>
            <h1 className={styles.profile__title}>Мой профиль</h1>
            <h2 className={styles.profile__subtitle}>Записи на прием</h2>
            {myAppointments.length ? (
                <ul className={styles.profile__previewList}>
                    <ReceptionCard data={myAppointments[0]} />
                    <ReceptionCard data={myAppointments[1]} />
                    <span className={styles.profile__linkWrapper}>
                        Еще 3 записи <br />
                        <Link
                            className={styles.profile__link}
                            to='/Profile/MyAppointments'
                        >
                            Подробнее
                        </Link>
                    </span>
                </ul>
            ) : null}

            <div className={styles.profile__electronicCard}>
                <h3 className={styles.profile__subtitle2}>Электронная карта</h3>
                <ul className={styles.profile__list}>
                    <ElectronicCardItem
                        title='Информация о пациенте'
                        icon={patientInfo}
                        text={
                            <ul>
                                <li>Ваши личные данные</li>
                                <li>Рекомендации врачей</li>
                                <li>История болезней</li>
                            </ul>
                        }
                    />
                    <ElectronicCardItem
                        title='Результаты анализов'
                        icon={testTubes}
                        text={
                            <p>
                                Вы можете узнать здесь результаты своих анализов
                            </p>
                        }
                    />
                    <ElectronicCardItem
                        title='Добавить информацию'
                        icon={addInfo}
                        text={
                            <p>
                                Добавляйте в свою электронную медицинскую карту
                                новые данные
                            </p>
                        }
                    />
                    <ElectronicCardItem
                        title='История приемов'
                        icon={receptionHistory}
                        text={
                            <p>
                                Вся информация о полученных услугах за все время
                                хранится здесь
                            </p>
                        }
                    />
                </ul>
            </div>
        </div>
    );
}
