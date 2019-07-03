import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';
import samplePerson from '../../sampleDataDirectory/samplePeople';

describe('Person', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Person people={samplePerson.results} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
