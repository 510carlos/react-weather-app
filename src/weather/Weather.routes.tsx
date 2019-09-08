import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';

import CityWeather from './components/CityWeather';
import SelectCity from './components/SelectCities';

const WeatherRoutes: React.SFC<RouteComponentProps> = ({
  match,
}: RouteComponentProps) => (
  <>
    <Switch>
      <Route exact={true} path={match.url} component={SelectCity} />
      <Route path={`${match.url}/city/:cityId`} component={CityWeather} />
    </Switch>
  </>
);

export default withRouter(WeatherRoutes);
