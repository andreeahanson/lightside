import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
// import CardContainer from '../cardContainer/CardContainer';
import Person from '../person/Person';
import Planet from '../planet/Planet';
import Vehicle from '../vehicle/Vehicle';
// import IntroStory from '../introStory/IntroStory';
import Landing from '../landing/Landing';
import HeaderFav from '../headerFav/HeaderFav';
import Favorite from '../favorite/Favorite';
// import sample from './sample';

class App extends Component {
  constructor() {
    super();
    // this.test = this.test();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      films: [],
      favorites: []
    };
  }

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
        .then(final => this.setState({ [final.title]: final.results }));
    });
  };

  componentDidMount = () => {
    this.getData();
  };

  makeFavorite = (id, type) => {
    const newFavorite = this.state[type].find(card => {
      return card.created === id
    })
    let addedFavorites = [...new Set([...this.state.favorites, newFavorite])]
    this.setState({favorites: addedFavorites}, () => console.log(this.state.favorites))
  }

  render = () => {
    // const loading = !this.state.films.length && <img src='https://loading.io/spinners/flickr/lg.orbit-balls-loading-gif.gif' alt='loading' />;
    return (
      <main>
        <div className='header'>
          <HeaderFav 
          favorites={this.state.favorites.length}
          />
          <nav className='nav-links'>
            <NavLink to='/people' className='nav-button'>People</NavLink>
            <NavLink to='/planets' className='nav-button'>Planets</NavLink>
            <NavLink to='/vehicles' className='nav-button'>Vehicles</NavLink>
          </nav>
        </div>
        <section>
          {/* {loading} */}
          <Route
            exact
            path='/'
            render={() => <Landing films={this.state.films} />}
          />
          <div className='card-container'>
            <Route
              path='/people'
              render={() => <Person people={this.state.people}
              makeFavorite={this.makeFavorite} />}
            />
            <Route
              path='/planets'
              render={() => <Planet planets={this.state.planets} 
              makeFavorite={this.makeFavorite}/>}
            />
            <Route
              path='/vehicles'
              render={() => <Vehicle vehicles={this.state.vehicles} 
              makeFavorite={this.makeFavorite}/>}
            />
            <Route
              path='/favorites'
              render={() => <Favorite favorites={this.state.favorites} 
              />}
            />
          </div>
        </section>
      </main>
    );
  };
}

export default App;
