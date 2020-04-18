import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        background: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 31px'
    }
}));

const Topbar = props => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <AppBar
            {...rest}
            className={clsx(classes.root, className)}
            color="primary">
            <Toolbar>
                <RouterLink to="/">
                    <img alt="Logo" src="/images/logos/logo.png" />
                </RouterLink>
            </Toolbar>
        </AppBar>
    );
};

Topbar.propTypes = {
    className: PropTypes.string
};

export default Topbar;
