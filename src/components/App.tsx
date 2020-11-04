import React, { FunctionComponent } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import { Provider } from 'react-redux';

import store from '@redux/store';
import {
    UsersList,
    UsersListHedaer,
    ContainerMedium,
} from '@components';

const App: FunctionComponent = () => (
    <Provider store={store}>
        <CssBaseline />

        <UsersListHedaer />

        <ContainerMedium>
            <UsersList />
        </ContainerMedium>
    </Provider>
);

export default App;
