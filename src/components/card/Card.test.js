import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import samplePerson from '../../sampleDataDirectory/samplePeople';
import sampleVehicles from '../../sampleDataDirectory/sampleVehicles';
import samplePlanets from '../../sampleDataDirectory/samplePlanets';
import sampleFavorites from '../../sampleDataDirectory/sampleFavorites';

describe('Card', () => {
  let wrapper1;
  let wrapper2;
  let wrapper3;
  let toggleFavoriteMock = jest.fn();
  let classNameMock = '.crap';

  beforeEach(() => {
    wrapper1 = shallow(
      <Card
        data={samplePerson.results}
        favorites={sampleFavorites.results}
        toggleFavorite={toggleFavoriteMock}
        className={classNameMock}
        error='error'
      />
    );

    wrapper2 = shallow(
      <Card
        data={sampleVehicles.results}
        favorites={sampleFavorites.results}
        toggleFavorite={toggleFavoriteMock}
        className={classNameMock}
        eerror='error'
      />
    );

    wrapper3 = shallow(
      <Card
        data={samplePlanets.results}
        favorites={sampleFavorites.results}
        toggleFavorite={toggleFavoriteMock}
        className={classNameMock}
        error='error'
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper1).toMatchSnapshot();
    expect(wrapper2).toMatchSnapshot();
    expect(wrapper3).toMatchSnapshot();
  });

  it('should match the snapshot when there are no favorites or data items', () => {
    wrapper1 = shallow(
      <Card data={[]} favorites={[]} className={classNameMock} error='error' />
    );

    expect(wrapper1).toMatchSnapshot();
  });

  it('should invoke toggleFavorite on click', () => {
    wrapper1 = shallow(
      <Card
        data={[
          {
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
          }
        ]}
        favorites={[]}
        className={classNameMock}
        toggleFavorite={toggleFavoriteMock}
        error='error'
      />
    );

    wrapper1.find('article').simulate('click');

    expect(toggleFavoriteMock).toBeCalled();
  });
});
