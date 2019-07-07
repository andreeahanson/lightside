import React from 'react';
import PropTypes from 'prop-types';
import './Vehicle.css';
import '../person/Person.css';

const Vehicle = ({ vehicles, toggleFavorite, favorites }) => {
  let allCards = vehicles.map(vehicle => {
    const classString = `card-${favorites.includes(vehicle) && 'faved'}`;
    const faveStatus = classString === 'card-faved' ? 'Unfavorite' : 'Favorite';
    return (
      <article
        className={classString}
        key={vehicle.created}
        id={vehicle.created}
        onClick={() => toggleFavorite(vehicle.created, 'vehicles', classString)}
      >
        <h3 className='top-card'>{vehicle.name}</h3>
        <hr />
        <div className='mid-card'>
          <p>Model: {vehicle.model}</p>
          <p>Class: {vehicle.vehicle_class}</p>
          <p>Passengers: {vehicle.passengers}</p>
        </div>
        <hr />
        <p className='favorite bottom-card'>{faveStatus}</p>
      </article>
    );
  });
  return allCards;
};

Vehicle.propTypes = {
  vehicles: PropTypes.array
};

export default Vehicle;
