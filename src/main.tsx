import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Profile from './pages/Profile';
import Layout from './pages/Layout';
import MyAppointments from './pages/MyAppointments';
import Doctors from './pages/InDeveloping';
import InDeveloping from './pages/InDeveloping';
import { MantineProvider } from '@mantine/core';
import { store } from './store';
import { Provider } from 'react-redux';

// Часть роутов неактивна, потому что страницы в разработке.
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/profile/myAppointments',
                element: <MyAppointments />,
            },
            {
                path: '/doctors',
                element: <InDeveloping />,
            },
            {
                path: '/messages',
                element: <InDeveloping />,
            },
            {
                path: '/tests',
                element: <InDeveloping />,
            },
            {
                path: '/goodToKnow',
                element: <InDeveloping />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <RouterProvider router={router} />
        </MantineProvider>
    </Provider>
);
