import React, { FunctionComponent } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { Provider } from 'react-redux';

import store from '@redux/store';
import UsersList from '@components/UsersList';

const useContainerStyles = makeStyles(
    () => createStyles({
        usersListContainer: {
            padding: 0,
        },
    }),
);

const App: FunctionComponent = () => {
    const classes = useContainerStyles();

    return (
        <Provider store={store}>
            <CssBaseline />
            <Container
                maxWidth="md"
                className={classes.usersListContainer}
            >
                <UsersList />
            </Container>
        </Provider>
    );
};

export default App;
