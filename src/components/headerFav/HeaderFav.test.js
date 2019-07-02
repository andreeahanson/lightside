import React from 'react';
import { shallow } from 'enzyme';
import HeaderFav from './HeaderFav';

describe('HeaderFav', () => {
  let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<HeaderFav />)
    })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })


})