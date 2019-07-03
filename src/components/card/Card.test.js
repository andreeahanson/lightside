import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import samplePerson from '../../sampleDataDirectory/samplePeople';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card people={samplePerson.results} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
