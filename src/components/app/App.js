import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Card from '../card/Card';
import Landing from '../landing/Landing';
import HeaderFav from '../headerFav/HeaderFav';
import getData from '../util/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      films: [],
      favorites: [],
      error: ''
    };
  }

  componentDidMount = testUrls => {
    getData(testUrls)
      .then(finalData =>
        finalData.forEach(category => {
          this.setState({ [category.title]: category.results });
        })
      )

      .catch(error =>
        this.setState({
          error: "I'm sorry, Lord Vader, there was an error fetching..."
        })
      );
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
          {this.state.error && (
            <h2 className='error-message'>{this.state.error}</h2>
          )}
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
                /* istanbul ignore next */
                  data={this.state.people}
                  favorites={this.state.favorites}
                  toggleFavorite={this.toggleFavorite}
                  type='people'
                  error={this.state.error}
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
                  error={this.state.error}
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
                  error={this.state.error}
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
                  error={this.state.error}
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
