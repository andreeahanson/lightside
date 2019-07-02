import React, { Component } from 'react';
import './App.css';
import CardContainer from '../cardContainer/CardContainer';
import IntroStory from '../introStory/IntroStory';
import HeaderFav from '../headerFav/HeaderFav';
import sample from './sample';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [
        {
          birth_year: "41.9BBY",
          created: "2014-12-10T16:20:44.310000Z",
          edited: "2014-12-20T21:17:50.327000Z",
          eye_color: "blue",
          films:["https://swapi.co/api/films/5/", "https://swapi.co/api/films/4/", "https://swapi.co/api/films/6/"],
          gender: "male",
          hair_color: "blond",
          height: "188",
          homeworld: "https://swapi.co/api/planets/1/",
          mass: "84",
          name: "Anakin Skywalker",
          skin_color: "fair",
          species: ["https://swapi.co/api/species/1/"],
          starships: ["https://swapi.co/api/starships/59/", "https://swapi.co/api/starships/65/", "https://swapi.co/api/starships/39/"],
          url: "https://swapi.co/api/people/11/",
          vehicles: ["https://swapi.co/api/vehicles/44/", "https://swapi.co/api/vehicles/46/"]
        },
        {
          birth_year: "64BBY", 
          created: "2014-12-10T16:26:56.138000Z", 
          edited: "2014-12-20T21:17:50.330000Z", 
          eye_color: "blue", 
          films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"], 
          gender: "male", 
          hair_color: "auburn, grey", 
          height: "180", 
          homeworld: "https://swapi.co/api/planets/21/", 
          mass: "unknown", 
          name: "Wilhuff Tarkin", 
          skin_color: "fair", 
          species: ["https://swapi.co/api/species/1/"], 
          starships: [], 
          url: "https://swapi.co/api/people/12/", 
          vehicles: []
        },
        {
          birth_year: "200BBY",
          created: "2014-12-10T16:42:45.066000Z",
          edited: "2014-12-20T21:17:50.332000Z",
          eye_color: "blue",
          films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"],
          gender: "male",
          hair_color: "brown",
          height: "228",
          homeworld: "https://swapi.co/api/planets/14/",
          mass: "112",
          name: "Chewbacca",
          skin_color: "unknown",
          species: ["https://swapi.co/api/species/3/"],
          starships: ["https://swapi.co/api/starships/10/", "https://swapi.co/api/starships/22/"],
          url: "https://swapi.co/api/people/13/",
          vehicles: ["https://swapi.co/api/vehicles/19/"]
        },
        {
          birth_year: "29BBY",
          created: "2014-12-10T16:49:14.582000Z",
          edited: "2014-12-20T21:17:50.334000Z",
          eye_color: "brown",
          films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"],
          gender: "male",
          hair_color: "brown",
          height: "180",
          homeworld: "https://swapi.co/api/planets/22/",
          mass: "80",
          name: "Han Solo",
          skin_color: "fair",
          species: ["https://swapi.co/api/species/1/"],
          starships: ["https://swapi.co/api/starships/10/", "https://swapi.co/api/starships/22/"],
          url: "https://swapi.co/api/people/14/",
          vehicles: []
        },
        {
          birth_year: "44BBY",
          created: "2014-12-10T17:03:30.334000Z",
          edited: "2014-12-20T21:17:50.336000Z",
          eye_color: "black",
          films: ["https://swapi.co/api/films/1/"],
          gender: "male",
          hair_color: "n/a",
          height: "173",
          homeworld: "https://swapi.co/api/planets/23/",
          mass: "74",
          name: "Greedo",
          skin_color: "green",
          species: ["https://swapi.co/api/species/4/"],
          starships: [],
          url: "https://swapi.co/api/people/15/",
          vehicles: []
        },
        {
          birth_year: "600BBY",
          created: "2014-12-10T17:11:31.638000Z",
          edited: "2014-12-20T21:17:50.338000Z",
          eye_color: "orange",
          films: ["https://swapi.co/api/films/4/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/"],
          gender: "hermaphrodite",
          hair_color: "n/a",
          height: "175",
          homeworld: "https://swapi.co/api/planets/24/",
          mass: "1,358",
          name: "Jabba Desilijic Tiure",
          skin_color: "green-tan, brown",
          species: ["https://swapi.co/api/species/5/"],
          starships: [],
          url: "https://swapi.co/api/people/16/",
          vehicles: []
        },
        {
          birth_year: "21BBY",
          created: "2014-12-12T11:08:06.469000Z",
          edited: "2014-12-20T21:17:50.341000Z",
          eye_color: "hazel",
          films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/"],
          gender: "male",
          hair_color: "brown",
          height: "170",
          homeworld: "https://swapi.co/api/planets/22/",
          mass: "77",
          name: "Wedge Antilles",
          skin_color: "fair",
          species: ["https://swapi.co/api/species/1/"],
          starships: ["https://swapi.co/api/starships/12/"],
          url: "https://swapi.co/api/people/18/",
          vehicles: ["https://swapi.co/api/vehicles/14/"]
        },
        {
          birth_year: "unknown",
          created: "2014-12-12T11:16:56.569000Z",
          edited: "2014-12-20T21:17:50.343000Z",
          eye_color: "blue",
          films: ["https://swapi.co/api/films/1/"],
          gender: "male",
          hair_color: "brown",
          height: "180",
          homeworld: "https://swapi.co/api/planets/26/",
          mass: "110",
          name: "Jek Tono Porkins",
          skin_color: "fair",
          species: ["https://swapi.co/api/species/1/"],
          starships: ["https://swapi.co/api/starships/12/"],
          url: "https://swapi.co/api/people/19/",
          vehicles: []
        },
        {
          birth_year: "896BBY",
          created: "2014-12-15T12:26:01.042000Z",
          edited: "2014-12-20T21:17:50.345000Z",
          eye_color: "brown",
          films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/5/", "https://swapi.co/api/films/4/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/"],
          gender: "male",
          hair_color: "white",
          height: "66",
          homeworld: "https://swapi.co/api/planets/28/",
          mass: "17",
          name: "Yoda",
          skin_color: "green",
          species: ["https://swapi.co/api/species/6/"],
          starships: [],
          url: "https://swapi.co/api/people/20/",
          vehicles: []
        },
        {
          birth_year: "82BBY",
          created: "2014-12-15T12:48:05.971000Z",
          edited: "2014-12-20T21:17:50.347000Z",
          eye_color: "yellow",
          films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/5/", "https://swapi.co/api/films/4/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/"],
          gender: "male",
          hair_color: "grey",
          height: "170",
          homeworld: "https://swapi.co/api/planets/8/",
          mass: "75",
          name: "Palpatine",
          skin_color: "pale",
          species: ["https://swapi.co/api/species/1/"],
          starships: [],
          url: "https://swapi.co/api/people/21/",
          vehicles: []
        }
      
      ]
    };
  }

  render = () => {
    const results = this.state.results
    return(
      <main>
        <IntroStory />
        <div className='content'>
          <HeaderFav />
          <CardContainer results={results}/>
        </div>
      </main>
    )
  }
}

export default App;