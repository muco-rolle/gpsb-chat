import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

import { Page } from 'components';
import { LoginForm } from './components';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(6, 2)
    },
    card: {
        width: theme.breakpoints.values.sm,
        maxWidth: '100%',
        overflow: 'unset',
        display: 'flex',
        position: 'relative',
        '& > *': {
            flexGrow: 1,
            flexBasis: '50%',
            width: '50%'
        }
    },
    content: {
        padding: theme.spacing(4, 4, 3, 4),
        textAlign: 'center'
    },

    loginForm: {
        marginTop: theme.spacing(3)
    }
}));

const Login = () => {
    const classes = useStyles();

    return (
        <Page className={classes.root} title="Login">
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h3">
                        Sign in
                    </Typography>
                    <LoginForm className={classes.loginForm} />
                </CardContent>
            </Card>
        </Page>
    );
};

export default Login;
