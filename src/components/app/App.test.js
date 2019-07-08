import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockData;

  beforeEach(() => {
    wrapper = shallow(<App />);
    mockData = {
      birth_year: '41.9BBY',
      created: '2014-12-10T16:20:44.310000Z',
      edited: '2014-12-20T21:17:50.327000Z',
      eye_color: 'blue',
      films: [
        'https://swapi.co/api/films/5/',
        'https://swapi.co/api/films/4/',
        'https://swapi.co/api/films/6/'
      ],
      gender: 'male',
      hair_color: 'blond',
      height: '188',
      homeworld: 'https://swapi.co/api/planets/1/',
      mass: '84',
      name: 'Anakin Skywalker',
      skin_color: 'fair',
      species: ['https://swapi.co/api/species/1/'],
      starships: [
        'https://swapi.co/api/starships/59/',
        'https://swapi.co/api/starships/65/',
        'https://swapi.co/api/starships/39/'
      ],
      url: 'https://swapi.co/api/people/11/',
      vehicles: [
        'https://swapi.co/api/vehicles/44/',
        'https://swapi.co/api/vehicles/46/'
      ]
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockData)
      });
    });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetch when the component mounts', () => {
    wrapper.instance().getData();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should have a method that adds cards to the favorites array', () => {
    const created = '2014-12-10T16:20:44.310000Z';
    wrapper.state = { people: [mockData], favorites: [] };
    wrapper.instance().toggleFavorite(created, 'people', 'card-false');
    expect(wrapper.state['favorites'].length).toEqual(1);
  });

});
