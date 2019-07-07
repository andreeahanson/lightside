import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';

const Person = ({ people, makeFavorite, favorites }) => {
  let allCards = people.map(person => {
    const classString = `card-${favorites.includes(person) && 'faved'}`;
    const faveStatus = classString === 'card-faved' ? 'Unfavorite' : 'Favorite';
    return (
      <article
        className={classString}
        key={person.created}
        id={person.created}
        onClick={() => makeFavorite(person.created, 'people', classString)}
      >
        <h3 className='top-card'>{person.name}</h3>
        <hr />
        <div className='mid-card'>
          <p>Birth Year: {person.birth_year}</p>
          <p>Gender: {person.gender}</p>
          <p>Height: {person.height}</p>
          <p>Hair Color: {person.hair_color}</p>
        </div>
        <hr />
        <p className='favorite bottom-card'>{faveStatus}</p>
      </article>
    );
  });
  return allCards;
};

Person.propTypes = {
  people: PropTypes.array
};

export default Person;
