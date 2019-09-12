import * as React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router';

import CityWeather from './components/CityWeather';
import SelectCity from './components/SelectCities';

const WeatherRoutes: React.SFC<RouteComponentProps> = ({
  match,
}: RouteComponentProps) => {
  return (
    <Switch>
      <Route path={`${match.url}city/:cityId`} component={CityWeather} />
      <Route path={match.url} component={SelectCity} />
    </Switch>
  );
};

export default withRouter(WeatherRoutes);
