import React from 'react';
import PropTypes from 'prop-types';
import './Favorite.css';


const Favorite = ({ favorites }) => {

  let allCards = favorites.map(favorite => {
    const classString =`card-${favorites.includes(favorite) && 'faved'}`
    if(favorite.birth_year) {
      return (
        <article className={classString} key={favorite.created} id={favorite.created}>
        <h3 className="top-card">{favorite.name}</h3>
        <hr></hr>
        <div className="mid-card">
        <p>{favorite.birth_year}</p>
        <p>{favorite.gender}</p>
        <p>{favorite.height}</p>
        <p>{favorite.hair_color}</p>
        </div>
        <hr></hr>
        <p className='favorite bottom-card unfav'>Unfavorite</p>
      </article>
      );
    } else if (favorite.terrain) {
      return (
        <article className={classString} key={favorite.created} id={favorite.created}>
          <h3 className='top-card'>{favorite.name}</h3>
          <hr></hr>
          <div className='mid-card'>
            <p>{favorite.terrain}</p>
            <p>{favorite.diameter}</p>
            <p>{favorite.population}</p>
          </div>
          <hr></hr>
          <p className='favorite bottom-card unfav'>Unfavorite</p>
        </article>
      );
    } else {
      console.log("MODEL", favorite)
      return (
        <article className={classString} key={favorite.created} id={favorite.created}>
          <h3 className="top-card">{favorite.name}</h3>
          <hr></hr>
          <div className="mid-card">
            <p>{favorite.model}</p>
            <p>{favorite.vehicle_class}</p>
            <p>{favorite.passengers}</p>
          </div>
          <hr></hr>
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