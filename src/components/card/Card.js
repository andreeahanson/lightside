import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ data, toggleFavorite, favorites, type }) => {
  let allCards = data.map(datum => {
    const classString = `card-${favorites.includes(datum) && 'faved'}`;
    const faveStatus = classString === 'card-faved' ? 'Unfavorite' : 'Favorite';
    return (
      <article
        className={classString}
        key={datum.created}
        id={datum.created}
        onClick={() => toggleFavorite(datum.created, type, classString)}
      >
        <h3 className='top-card'>{datum.name}</h3>
        <hr />
        <div className='mid-card'>
          {datum.birth_year && <p>Birth Year: {datum.birth_year}</p>}
          {datum.gender && <p>Gender: {datum.gender}</p>}
          {datum.height && <p>Height: {datum.height} cm</p>}
          {datum.hair_color && <p>Hair Color: {datum.hair_color}</p>}
          {datum.model && <p>Model: {datum.model}</p>}
          {datum.vehicle_class && <p>Class: {datum.vehicle_class}</p>}
          {datum.passengers && <p>Passengers: {datum.passengers}</p>}
          {datum.terrain && <p>Terrain: {datum.terrain}</p>}
          {datum.diameter && <p>Diameter: {datum.diameter}</p>}
          {datum.population && <p>Population: {datum.population}</p>}
        </div>
        <hr />
        <p className='favorite bottom-card'>{faveStatus}</p>
      </article>
    );
  });
  return allCards;
};

Card.propTypes = {
  people: PropTypes.array
};

export default Card;
