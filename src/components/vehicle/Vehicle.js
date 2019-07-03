import React from 'react';
import './Vehicle.css';

const Vehicle = ({ vehicles }) => {
  // console.log(people);
  let allCards = vehicles.map(vehicle => {
    return (
      <article class='card'>
        <h3>{vehicle.name}</h3>
        <p>{vehicle.model}</p>
        <p>{vehicle.class}</p>
        <p>{vehicle.passengers}</p>
        <button className='favorite'>Favorite</button>
      </article>
    );
  });
  return allCards;
};

export default Vehicle;
