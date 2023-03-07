// import Image from 'next/image';
import styles from './Header.module.scss';
import avatar from '../../../avatar/avatar.png';
import lupe from '../../../icons/lupe.svg';
import bell from '../../../icons/bell.svg';
import eye from '../../../icons/eye.svg';
import reveal from '../../../icons/reveal.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__logoSection}>Логотип</div>
            <div className={styles.header__wrapper}>
                <div className={styles.header__icons}>
                    <img alt='lupe icon' src={lupe} />
                    <img alt='bell icon' src={bell} />
                    <img alt='eye icon' src={eye} />
                    <div className={styles.header__iconWrapper}>
                        <img alt='avatar' src={avatar} placeholder='blur' />
                    </div>

                    <img alt='reveal icon' src={reveal} />
                </div>
            </div>
        </div>
    );
};

export default Header;
