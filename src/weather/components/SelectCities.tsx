import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import { Select } from 'antd';

import 'antd/dist/antd.css';

const { Option } = Select;

const SelectCities = () => {
  const [cityId, setCityId] = useState(0);

  useEffect(() => {
    let mounted = true;
    if (mounted) setCityId(0);
    return () => {
      mounted = false;
    };
  }, [cityId]);

  const changeCity = () => setCityId(cityId);

  if (cityId !== 0) return <Redirect to={`/city/${cityId}`} />;

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a city"
      optionFilterProp="Cities"
      onChange={changeCity}
    >
      <Option value="5391997">San Francisco</Option>
      <Option value="5128638">New York</Option>
      <Option value="5781004">Salt Lake City</Option>
    </Select>
  );
};

export default SelectCities;
