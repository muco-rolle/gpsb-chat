/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import DashboardLayout from './layouts/Dashboard';

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/auth/login" />
    },
    {
        path: '/auth',
        component: AuthLayout,
        routes: [
            {
                path: '/auth/login',
                exact: true,
                component: lazy(() => import('views/Login'))
            }
        ]
    },

    {
        route: '*',
        component: DashboardLayout,
        routes: [
            {
                path: '/chat',
                exact: true,
                component: lazy(() => import('views/Chat'))
            },
            {
                path: '/chat/:id',
                exact: true,
                component: lazy(() => import('views/Chat'))
            }
        ]
    }
];

export default routes;
