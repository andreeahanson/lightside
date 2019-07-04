import React from 'react';
import { shallow } from 'enzyme';
import Planet from './Planet';
import samplePlanets from '../../sampleDataDirectory/samplePlanets';

describe('Planet', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Planet planets={samplePlanets.results} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
