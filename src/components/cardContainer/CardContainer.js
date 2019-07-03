import React from 'react';
import './CardContainer.css';
import Person from '../person/Person';
import Vehicle from '../vehicle/Vehicle';
import Planet from '../planet/Planet';

const CardContainer = props => {
  // console.log(props.state.people);
  return (
    <div className='overflow'>
      <h1>Select a Category</h1>
      <section className='card-container'>
        <h2>People</h2>
        <Person people={props.state.people} />
        <h2>Vehicles</h2>
        <Vehicle vehicles={props.state.vehicles} />
        <h2>Planets</h2>
        <Planet planets={props.state.planets} />
      </section>
    </div>
  );
};

export default CardContainer;
