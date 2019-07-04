import React from 'react';
import PropTypes from 'prop-types';
import './Vehicle.css';

const Vehicle = ({ vehicles }) => {
  // console.log(people);
  let allCards = vehicles.map(vehicle => {
    return (
      <article class='card vehicle'>
        <h3>{vehicle.name}</h3>
        <p>{vehicle.model}</p>
        <p>{vehicle.vehicle_class}</p>
        <p>{vehicle.passengers}</p>
        <button className='favorite'>Favorite</button>
      </article>
    );
  });
  return allCards;
};

Vehicle.propTypes = {
  vehicles: PropTypes.array
};

export default Vehicle;
