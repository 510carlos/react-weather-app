import * as React from 'react';

import SelectCities from '../SelectCities';
import { render } from 'enzyme';

const dom = <SelectCities />;

describe('Unit Tests', () => {
    it('should render properly', () => {
        render(dom);
    });
});