import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
// import CardContainer from '../cardContainer/CardContainer';
import Person from '../person/Person';
import Planet from '../planet/Planet';
import Vehicle from '../vehicle/Vehicle';
import IntroStory from '../introStory/IntroStory';
import HeaderFav from '../headerFav/HeaderFav';
// import sample from './sample';

class App extends Component {
  constructor() {
    super();
    // this.test = this.test();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      films: []
    };
  }

  getData = () => {
    const urls = [
      { title: 'people', link: 'https://swapi.co/api/people/' },
      { title: 'planets', link: 'https://swapi.co/api/planets/' },
      { title: 'vehicles', link: 'https://swapi.co/api/vehicles/' },
      { title: 'films', link: 'https://swapi.co/api/films/' }
    ];
    urls.map(url => {
      return fetch(url.link)
        .then(response => response.json())
        .then(data => ({ ...data, title: url.title }))
        .then(final => this.setState({ [final.title]: final.results }));
    });
  };

  componentDidMount = () => {
    this.getData();
  };

  render = () => {
    const loading = !this.state.films.length && <img src='https://loading.io/spinners/flickr/lg.orbit-balls-loading-gif.gif' alt='loading' />;
    return (
      <main>
        <HeaderFav />
        <nav>
          <NavLink to='/people'>People</NavLink>
          <NavLink to='/planets'>Planets</NavLink>
          <NavLink to='/vehicles'>Vehicles</NavLink>
        </nav>
        <section>
          {loading}
          <Route
            exact
            path='/'
            render={() => <IntroStory films={this.state.films} />}
          />
          <Route
            path='/people'
            render={() => <Person people={this.state.people} />}
          />
          <Route
            path='/planets'
            render={() => <Planet planets={this.state.planets} />}
          />
          <Route
            path='/vehicles'
            render={() => <Vehicle vehicles={this.state.vehicles} />}
          />
        </section>
      </main>
    );
  };
}

export default App;
