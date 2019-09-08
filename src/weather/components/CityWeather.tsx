import { List } from 'antd';
import React, { useEffect, useState } from 'react';
import { getWeather } from '../Weather.helpers';

import 'antd/dist/antd.css';

const CityWeather = () => {
  const [weather, setWeather] = useState({
    cityName: 'N/A',
    currentTemp: 'N/A',
    hiTemp: 'N/A',
    lowTemp: 'N/A',
  });

  useEffect(() => {
    let mounted = true;
    getWeather(5391997).then(result => {
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
  }, []);

  const data = [
    `City Name: ${weather.cityName}`,
    `Current temperature: ${weather.currentTemp}`,
    `Hi temperature: ${weather.hiTemp}`,
    `Low temperature: ${weather.lowTemp}`,
  ];

  return (
    <List
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
};

export default CityWeather;
