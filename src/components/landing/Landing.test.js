import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';
import sampleFilms from '../../sampleDataDirectory/sampleFilms';

describe('Landing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Landing films={sampleFilms.results} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should return a random movie from an array of movies', () => {
  //   console.log('wrapper', wrapper);
  //   expect(wrapper.props().films).toEqual('A New Hope');
  // });
});
