import { List } from 'antd';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { getWeather } from '../Weather.helpers';

import SelectCity from './SelectCities';

import 'antd/dist/antd.css';

interface IMatchParams {
  cityId: string;
}

const CityWeather = ({ match }: RouteComponentProps<IMatchParams>) => {
  const cityId: string = match.params.cityId;

  const [weather, setWeather] = useState({
    cityName: 'N/A',
    currentTemp: 'N/A',
    hiTemp: 'N/A',
    lowTemp: 'N/A',
  });

  useEffect(() => {
    let mounted = true;
    getWeather(cityId).then(result => {
      const { name, main } = result.data;
      if (mounted) {
        setWeather({
          cityName: name,
          currentTemp: main.temp,
          hiTemp: main.temp_max,
          lowTemp: main.temp_min,
        });
      }
    });
    return () => {
      mounted = false;
    };
  }, [cityId]);

  const data = [
    `City Name: ${weather.cityName}`,
    `Current temperature: ${weather.currentTemp}`,
    `Hi temperature: ${weather.hiTemp}`,
    `Low temperature: ${weather.lowTemp}`,
  ];

  return (
    <div>
      <SelectCity />
      <List
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default CityWeather;
