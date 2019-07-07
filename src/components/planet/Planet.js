import React from 'react';
import PropTypes from 'prop-types';
import './Planet.css';
import '../person/Person.css';

const Planet = ({ planets, makeFavorite, favorites }) => {
  let allCards = planets.map(planet => {
    const classString = `card-${favorites.includes(planet) && 'faved'}`;
    return (
      <article
        className={classString}
        key={planet.created}
        id={planet.created}
        onClick={() => makeFavorite(planet.created, 'planets')}
      >
        <h3 className='top-card'>{planet.name}</h3>
        <hr />
        <div className='mid-card'>
          <p>Terrain: {planet.terrain}</p>
          <p>Diameter: {planet.diameter}</p>
          <p>Population: {planet.population}</p>
        </div>
        <hr />
        <p className='favorite bottom-card'>Favorite</p>
      </article>
    );
  });
  return allCards;
};

Planet.propTypes = {
  planets: PropTypes.array
};

export default Planet;
