import React, { Component } from 'react';
import './App.css';
import CardContainer from '../cardContainer/CardContainer';
import IntroStory from '../introStory/IntroStory';
import HeaderFav from '../headerFav/HeaderFav';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render = () => {
    return(
      <main>
        <IntroStory />
        <div className='content'>
          <HeaderFav />
          <CardContainer />
        </div>
      </main>
    )
  }
}

export default App;