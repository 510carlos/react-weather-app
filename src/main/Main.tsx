import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Weather } from '../weather';

import 'antd/dist/antd.css';

export const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Weather} />
    </Switch>
  </BrowserRouter>
);

export default Main;
