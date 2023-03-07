import styles from './Aside.module.scss';
import { ReactComponent as Heart } from '../../../icons/heart.svg';
import { ReactComponent as Fhonendoscope } from '../../../icons/phonendoscope.svg';
import { ReactComponent as Messages } from '../../../icons/messages.svg';
import { ReactComponent as Tests } from '../../../icons/tests.svg';
import { ReactComponent as Book } from '../../../icons/book.svg';
import info from '../../../icons/info.svg';
import { NavLink } from 'react-router-dom';
import appvelox from '../../../icons/appvelox.png';

const Aside = () => {
    // Данные для бокового меню
    const asideListData = [
        {
            title: 'Профиль',
            icon: <Heart />,
            id: 0,
            link: 'profile',
        },
        {
            title: 'Врачи и клиники',
            icon: <Fhonendoscope />,
            id: 1,
            link: 'doctors',
        },
        {
            title: 'Сообщения',
            icon: <Messages />,
            id: 2,
            link: 'messages',
        },
        { title: 'Тестирование', icon: <Tests />, id: 3, link: 'tests' },
        { title: 'Полезно знать', icon: <Book />, id: 4, link: 'goodToKnow' },
    ];

    return (
        <aside className={styles.aside}>
            <div className={styles.aside__wrapper}>
                <ul className={styles.aside__list}>
                    {asideListData.map((item) => (
                        <NavLink
                            className={styles.aside__listItem}
                            to={item.link}
                            key={item.id}
                        >
                            {item.icon}
                            {item.title}
                        </NavLink>
                    ))}
                </ul>

                <button className={styles.aside__btn}>Подать заявку</button>
            </div>

            <div className={styles.aside__wrapper}>
                <div className={styles.aside__helpBtn}>
                    <img alt='info icon' src={info} />
                    Помощь
                </div>
                <div className={styles.aside__apveloxMark}>
                    <img alt='appvelox' src={appvelox} />
                </div>
            </div>
        </aside>
    );
};

export default Aside;
