import styles from './MyAppointments.module.scss';
import backArrow from '../../icons/backArrow.svg';
import { useNavigate } from 'react-router-dom';
import ReceptionCard from '../components/ReceptionCard';
import { DatePicker } from '@mantine/dates';
import 'dayjs/locale/ru';

import { useAppSelector } from '../../hooks/hooks';
import { IAppointment } from '../../features/appointmentsSlice';

export default function MyAppointments() {
    // хук для кнопки Верунться назад
    const navigate = useNavigate();
    // Получаю массив данных из стейта
    const myAppointments = useAppSelector(
        (state) => state.appointments.appointments
    );
    console.log(myAppointments);
    return (
        <div className={styles.myAppointments}>
            <h2 className={styles.myAppointments__title}>
                <button
                    className={styles.myAppointments__backBtn}
                    onClick={() => navigate(-1)}
                >
                    <img src={backArrow} alt='backArrow' />
                    Мои записи
                </button>
            </h2>
            <div className={styles.myAppointments__wrapper}>
                <ul className={styles.myAppointments__list}>
                    {myAppointments.length
                        ? myAppointments.map((item: IAppointment) => (
                              <ReceptionCard key={item.id} data={item} />
                          ))
                        : null}
                </ul>
                {/* В качестве календаря использую mantine date picker. 
                Не закончил с обозначением дат из полученных данных и стилями.  */}
                <DatePicker
                    styles={{
                        calendar: {
                            width: '573px',
                            height: '481px',
                            background: '#EBE7FF',
                            borderRadius: '5px',
                        },
                        calendarHeader: {
                            maxWidth: '100%',
                            backgroundColor: '#7761FF',
                            margin: '0',
                            height: '57px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingLeft: '198px',
                            paddingRight: '198px',
                        },
                        month: {
                            width: '573px',
                            marginTop: '10px',
                            borderSpacing: 0,
                        },
                        monthThead: {
                            fontWeight: 300,
                            fontSize: '14px',
                            color: '#000000',
                        },
                        calendarHeaderControlIcon: {
                            color: 'white',
                        },
                        calendarHeaderLevel: {
                            color: 'white',
                            fontWeight: 400,
                            fontSize: '14px',
                        },
                        day: {
                            background: 'white',
                            width: '100%',
                            borderRadius: 0,
                            height: '100%',
                        },
                        monthRow: {
                            borderSpacing: 0,
                            height: '63px',
                        },
                        monthCell: {
                            height: '63px',
                        },
                    }}
                    className={styles.myAppointments__calendar}
                    defaultValue={new Date()}
                    locale='ru'
                />
            </div>
        </div>
    );
}
