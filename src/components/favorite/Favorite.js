import React from 'react';

import PropTypes from 'prop-types';
import './Favorite.css';
import GreenJedi from '../../images/Sensibleworld-Starwars-Lightsaber-Green.svg';
import RedJedi from '../../images/Sensibleworld-Starwars-Lightsaber-Red.svg';

const Favorite = ({ favorites }) => {

  let allCards = favorites.map(favorite => {
    if(favorite.birth_year) {
      return (
        <article className='card person' key={favorite.created} id={favorite.created}>
          <h3>{favorite.name}</h3>
          <p>{favorite.birth_year}</p>
          <p>{favorite.gender}</p>
          <p>{favorite.height}</p>
          <p>{favorite.hair_color}</p>
          <img className='favorite' src={GreenJedi} alt=''/>
        </article>
      );
    } else if (favorite.terrain) {
      return (
        <article className='card planet' key={favorite.created}>
          <h3>{favorite.name}</h3>
          <p>{favorite.terrain}</p>
          <p>{favorite.diameter}</p>
          <p>{favorite.population}</p>
          <button className='favorite'>Favorite</button>
        </article>
      );
    } else {
      return (
        <article className='card vehicle' key={favorite.created}>
          <h3>{favorite.name}</h3>
          <p>{favorite.model}</p>
          <p>{favorite.vehicle_class}</p>
          <p>{favorite.passengers}</p>
          <button className='favorite'>Favorite</button>
        </article>
      );
    }
  });
  return allCards;
};

Favorite.propTypes = {
  favorites: PropTypes.array
};

export default Favorite;