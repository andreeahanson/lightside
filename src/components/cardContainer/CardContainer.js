import React from 'react';
import './CardContainer.css';
import Card from '../card/Card';

const CardContainer = ({ people }) => {
  // console.log(people);
  return (
    <div className='overflow'>
      <h1>Select a Category</h1>
      <section className='card-container'>
        <Card people={people} />
      </section>
    </div>
  );
};

export default CardContainer;
