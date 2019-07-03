import React from 'react';
import './Person.css';

const Person = ({ people }) => {
  // console.log(people);
  let allCards = people.map(person => {
    return (
      <article class='card'>
        <h3>{person.name}</h3>
        <p>{person.birth_year}</p>
        <p>{person.gender}</p>
        <p>{person.height}</p>
        <p>{person.hair_color}</p>
        <button className='favorite'>Favorite</button>
      </article>
    );
  });
  return allCards;
};

export default Person;
