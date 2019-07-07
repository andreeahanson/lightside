import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Card from '../card/Card';
import Landing from '../landing/Landing';
import HeaderFav from '../headerFav/HeaderFav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      films: [],
      favorites: []
    };
  }

  cleanUpData = initialData => {
    const relevantData = initialData.results.map(object => {
      return {
        created: object.created,
        title: object.title || null,
        name: object.name || null,
        birth_year: object.birth_year || null,
        gender: object.gender || null,
        height: object.height || null,
        hair_color: object.hair_color || null,
        terrain: object.terrain || null,
        diameter: object.diameter || null,
        population: object.population || null,
        model: object.model || null,
        vehicle_class: object.vehicle_class || null,
        passengers: object.passengers || null,
        opening_crawl: object.opening_crawl || null,
        release_date: object.release_date || null
      };
    });
    return { ...initialData, results: relevantData };
  };

  getData = () => {
    const tinyUrls = 'https://swapi.co/api/';
    const urls = [
      { title: 'people', link: `${tinyUrls}people/` },
      { title: 'planets', link: `${tinyUrls}planets/` },
      { title: 'vehicles', link: `${tinyUrls}vehicles/` },
      { title: 'films', link: `${tinyUrls}films/` }
    ];
    urls.map(url => {
      return fetch(url.link)
        .then(response => response.json())
        .then(data => ({ ...data, title: url.title }))
        .then(initialData => this.cleanUpData(initialData))
        .then(final => this.setState({ [final.title]: final.results }));
      // .then(() => console.log(this.state));
    });
  };

  componentDidMount = () => {
    this.getData();
  };

  toggleFavorite = (id, type, classString) => {
    if (classString === 'card-false') {
      const newFavorite = this.state[type].find(card => card.created === id);
      let addedFavorites = [...new Set([...this.state.favorites, newFavorite])];
      this.setState({ favorites: addedFavorites });
    } else {
      const removedFavorites = this.state.favorites.filter(
        card => card.created !== id
      );
      this.setState({ favorites: removedFavorites });
    }
  };

  render = () => {
    return (
      <main>
        <div className='header'>
          <HeaderFav favorites={this.state.favorites.length} />
          <nav className='nav-links'>
            <NavLink to='/people' className='nav-button'>
              People
            </NavLink>
            <NavLink to='/planets' className='nav-button'>
              Planets
            </NavLink>
            <NavLink to='/vehicles' className='nav-button'>
              Vehicles
            </NavLink>
          </nav>
        </div>
        <section>
          <Route
            exact
            path='/'
            render={() => <Landing films={this.state.films} />}
          />
          <div className='card-container'>
            <Route
              path='/people'
              render={() => (
                <Card
                  data={this.state.people}
                  favorites={this.state.favorites}
                  toggleFavorite={this.toggleFavorite}
                  type='people'
                />
              )}
            />
            <Route
              path='/planets'
              render={() => (
                <Card
                  data={this.state.planets}
                  favorites={this.state.favorites}
                  toggleFavorite={this.toggleFavorite}
                  type='planets'
                />
              )}
            />
            <Route
              path='/vehicles'
              render={() => (
                <Card
                  data={this.state.vehicles}
                  favorites={this.state.favorites}
                  toggleFavorite={this.toggleFavorite}
                  type='vehicles'
                />
              )}
            />
            <Route
              path='/favorites'
              render={() => (
                <Card
                  data={this.state.favorites}
                  favorites={this.state.favorites}
                  toggleFavorite={this.toggleFavorite}
                  type='favorites'
                />
              )}
            />
          </div>
        </section>
      </main>
    );
  };
}

export default App;
