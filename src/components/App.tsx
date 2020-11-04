import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';

import store from '@redux/store';
import {
    UsersList,
    UsersListHedaer,
    UsersListFooter,
    ContainerMedium,
} from '@components';

const App: FunctionComponent = () => (
    <Provider store={store}>
        <CssBaseline />

        <UsersListHedaer />

        <ContainerMedium>
            <UsersList />
        </ContainerMedium>

        <UsersListFooter />
    </Provider>
);

export default App;
