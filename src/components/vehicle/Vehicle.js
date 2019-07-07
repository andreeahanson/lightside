import React from 'react';
import PropTypes from 'prop-types';
import './Vehicle.css';
import '../person/Person.css';

const Vehicle = ({ vehicles, makeFavorite, favorites }) => {
  let allCards = vehicles.map(vehicle => {
    const classString = `card-${favorites.includes(vehicle) && 'faved'}`;
    return (
      <article
        className={classString}
        key={vehicle.created}
        id={vehicle.created}
        onClick={() => makeFavorite(vehicle.created, 'vehicles', classString)}
      >
        <h3 className='top-card'>{vehicle.name}</h3>
        <hr />
        <div className='mid-card'>
          <p>Model: {vehicle.model}</p>
          <p>Class: {vehicle.vehicle_class}</p>
          <p>Passengers: {vehicle.passengers}</p>
        </div>
        <hr />
        <p
          onClick={() => makeFavorite(vehicle.created, 'vehicles')}
          className='favorite bottom-card'
        >
          Favorite
        </p>
      </article>
    );
  });
  return allCards;
};

Vehicle.propTypes = {
  vehicles: PropTypes.array
};

export default Vehicle;
