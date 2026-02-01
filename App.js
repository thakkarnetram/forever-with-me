import React from 'react';
import Toast from 'react-native-toast-message';
import RootRouter from './src/navigation/RootRouter';

const App = () => {
  return (
      <>
        <RootRouter />
        <Toast />
      </>
  );
};

export default App;
