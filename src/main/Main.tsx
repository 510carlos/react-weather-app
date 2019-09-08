import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { compose, createStore } from 'redux';
import { Weather } from '../weather';
import mainReducer from './Main.reducer';

import 'antd/dist/antd.css';

const composeEnhancer: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: any = createStore(mainReducer, composeEnhancer());

export const Main = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Weather} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Main;
