import React from 'react';
import TabNavigator from './navigators/TabNavigator/TabNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TabNavigator />
      </PersistGate>
    </Provider>
  );
};
// probel
export default App;