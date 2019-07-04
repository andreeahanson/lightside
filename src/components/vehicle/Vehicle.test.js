import React from 'react';
import { shallow } from 'enzyme';
import Vehicle from './Vehicle';
import sampleVehicles from '../../sampleDataDirectory/sampleVehicles';

describe('Vehicle', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Vehicle vehicles={sampleVehicles.results} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
