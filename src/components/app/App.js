import React, { Component } from 'react';
import './App.css';
import CardContainer from '../cardContainer/CardContainer';
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
    const people = this.state.people;
    const films = this.state.films;
    // console.log('display', this.state.films)
    return (
      <main>
        {!this.state.films.length && (
            <img src='https://ui-ex.com/images/transparent-background-loading-3.gif' />
          )}
        <IntroStory films={films} />
        <div className='content'>
          <HeaderFav />
          {!this.state.people.length && (
            <img src='https://ui-ex.com/images/transparent-background-loading-3.gif' />
          )}
          <CardContainer people={people} />
        </div>
      </main>
    );
  };
}

export default App;
