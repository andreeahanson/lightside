import React from 'react';
import { shallow } from 'enzyme';
import IntroStory from './IntroStory';
import sampleFilms from '../../sampleDataDirectory/sampleFilms'

describe('IntroStory', () => {
  let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<IntroStory 
      films ={sampleFilms.results}
      />)
    })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })


})