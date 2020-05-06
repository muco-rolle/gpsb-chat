import React from 'react';
import MomentUtils from '@date-io/moment';
import ReactNotification from 'react-notifications-component';
import { Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from '@material-ui/styles';

import { store } from 'state';

import theme from './theme';
import routes from './routes';
import { ScrollReset } from './components';
import { history } from 'utils';

import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './assets/scss/index.scss';
import 'react-notifications-component/dist/theme.css'; // notification styles

const App = () => {
    return (
        <StoreProvider store={store}>
            <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Router history={history}>
                        <ScrollReset />
                        <ReactNotification />
                        {renderRoutes(routes)}
                    </Router>
                </MuiPickersUtilsProvider>
            </ThemeProvider>
        </StoreProvider>
    );
};

export default App;
