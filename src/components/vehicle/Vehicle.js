import React from 'react';
import PropTypes from 'prop-types';
import './Vehicle.css';

const Vehicle = ({ vehicles, makeFavorite }) => {
  // console.log(people);
  let allCards = vehicles.map(vehicle => {
    return (
      <article className='card vehicle' key={vehicle.created} id={vehicle.created}>
        <h3>{vehicle.name}</h3>
        <p>{vehicle.model}</p>
        <p>{vehicle.vehicle_class}</p>
        <p>{vehicle.passengers}</p>
        <button onClick={()=>makeFavorite(vehicle.created, 'vehicles')} className='favorite'>Favorite</button>
      </article>
    );
  });
  return allCards;
};

Vehicle.propTypes = {
  vehicles: PropTypes.array
};

export default Vehicle;
