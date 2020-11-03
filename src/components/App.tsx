import React, { FunctionComponent } from 'react';

import { Provider } from 'react-redux';

import store from '@redux/store';
import UsersList from '@components/UsersList';

const App: FunctionComponent = () => (
    <Provider store={store}>
        <UsersList />
    </Provider>
);

export default App;
