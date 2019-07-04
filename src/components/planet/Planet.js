import React from 'react';
import PropTypes from 'prop-types';
import './Planet.css';

const Planet = ({ planets }) => {
  // console.log(people);
  let allCards = planets.map(planet => {
    return (
      <article className='card planet' key={planet.created}>
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

Planet.propTypes = {
  planets: PropTypes.array
};

export default Planet;
