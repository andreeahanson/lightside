import React from 'react';
import PropTypes from 'prop-types';
import './Favorite.css';

const Favorite = ({ favorites, makeFavorite }) => {
  let allCards = favorites.map(favorite => {
    const classString = `card-${favorites.includes(favorite) && 'faved'}`;
    if (favorite.birth_year) {
      return (
        <article
          className={classString}
          key={favorite.created}
          id={favorite.created}
          onClick={() => makeFavorite(favorite.created, 'people', classString)}
        >
          <h3 className='top-card'>{favorite.name}</h3>
          <hr />
          <div className='mid-card'>
            <p>Birth Year: {favorite.birth_year}</p>
            <p>Gender: {favorite.gender}</p>
            <p>Height: {favorite.height}</p>
            <p>Hair Ccolor: {favorite.hair_color}</p>
          </div>
          <hr />
          <p className='favorite bottom-card unfav'>Unfavorite</p>
        </article>
      );
    } else if (favorite.terrain) {
      return (
        <article
          className={classString}
          key={favorite.created}
          id={favorite.created}
          onClick={() => makeFavorite(favorite.created, 'planets', classString)}
        >
          <h3 className='top-card'>{favorite.name}</h3>
          <hr />
          <div className='mid-card'>
            <p>Terrain: {favorite.terrain}</p>
            <p>Diameter: {favorite.diameter}</p>
            <p>Population: {favorite.population}</p>
          </div>
          <hr />
          <p className='favorite bottom-card unfav'>Unfavorite</p>
        </article>
      );
    } else {
      console.log('MODEL', favorite);
      return (
        <article
          className={classString}
          key={favorite.created}
          id={favorite.created}
          onClick={() =>
            makeFavorite(favorite.created, 'vehicles', classString)
          }
        >
          <h3 className='top-card'>{favorite.name}</h3>
          <hr />
          <div className='mid-card'>
            <p>Model: {favorite.model}</p>
            <p>Class: {favorite.vehicle_class}</p>
            <p>Passengers: {favorite.passengers}</p>
          </div>
          <hr />
          <p className='favorite bottom-card unfav'>Unfavorite</p>
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
