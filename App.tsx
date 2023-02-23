import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Criptotracker from './components/Criptotracker';

const App: () => JSX.Element = () => (
  <Provider store={store}>
    <Criptotracker />
  </Provider>
);

export default App;
