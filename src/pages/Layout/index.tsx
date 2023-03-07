import { FC, ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Aside from '../components/Aside/Aside';
import Header from '../components/Header';
import styles from './Layout.module.scss';

interface ILayout {
    children?: React.ReactNode;
}

function Layout({ children }: ILayout) {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.layout__wrapper}>
                <Aside />
                {children}
                <div className={styles.layout__detail} id='detail'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
