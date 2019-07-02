import React from 'react';
import './Card.css';

const Card = ({ people }) => {
  // console.log(people);
  let allCards = people.map(card => {
    return (
      <article class='card'>
        <h3>{card.name}</h3>
        <p>{card.birth_year}</p>
        <p>{card.gender}</p>
        <p>{card.height}</p>
        <p>{card.hair_color}</p>
        <button className='favorite'>Favorite</button>
      </article>
    );
  });
  return allCards;
};

export default Card;
