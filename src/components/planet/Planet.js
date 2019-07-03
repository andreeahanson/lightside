import React from 'react';
import './Planet.css';

const Planet = ({ planets }) => {
  // console.log(people);
  let allCards = planets.map(planet => {
    return (
      <article class='card'>
        <h3>{planet.name}</h3>
        <p>{planet.terrain}</p>
        <p>{planet.diameter}</p>
        <p>{planet.population}</p>
        <button className='favorite'>Favorite</button>
      </article>
    );
  });
  return allCards;
};

export default Planet;
