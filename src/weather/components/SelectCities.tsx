import * as React from 'react';

import { Select } from 'antd';

import 'antd/dist/antd.css';

const { Option } = Select;

const SelectCities = () => (
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a city"
    optionFilterProp="Cities"
  >
    <Option value="5391997">San Francisco</Option>
    <Option value="5128638">New York</Option>
    <Option value="5781004">Salt Lake City</Option>
  </Select>
);

export default SelectCities;
