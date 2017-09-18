import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import data from './wit/reducers/reducer';
import AppContainer from './components/AppContainer'
import store from './wit/stores/store'

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider> 
  )
}


export default App
