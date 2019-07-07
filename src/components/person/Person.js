import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';

const Person = ({ people, makeFavorite, favorites }) => {
  console.log(favorites);
  let allCards = people.map(person => {
    const classString=`card-${favorites.includes(person) && 'faved'}`
    return (
      <article className={classString} key={person.created} id={person.created} onClick={()=>makeFavorite(person.created, 'people')}>
        <h3 className="top-card">{person.name}</h3>
        <hr></hr>
        <div className="mid-card">
        <p>{person.birth_year}</p>
        <p>{person.gender}</p>
        <p>{person.height}</p>
        <p>{person.hair_color}</p>
        </div>
        <hr></hr>
        <p  className='favorite bottom-card'>Favorite</p>
      </article>
    );
  });
  return allCards;
};

Person.propTypes = {
  people: PropTypes.array
};

export default Person;
