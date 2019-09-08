import axios from 'axios';

export const getWeather = (cityId: number) => {
  return axios({
    method: 'get',
    url: `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=da65fafb6cb9242168b7724fb5ab75e7&units=imperial`,
  });
};
