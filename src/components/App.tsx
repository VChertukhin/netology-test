import React, { FunctionComponent } from 'react';

import { Provider } from 'react-redux';

import store from '@redux/store';

const App: FunctionComponent = () => (
    <Provider store={store}>
        <React.Fragment />
    </Provider>
);

export default App;
