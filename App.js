import React from 'react';
import {AppRouter} from './app/components';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import {StatusBar} from 'react-native';
import Colors from './app/utils/Colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar animated={true} backgroundColor={Colors.white} />
      <AppRouter />
    </Provider>
  );
};

export default App;
