import React from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import GreenJedi from '../../images/Sensibleworld-Starwars-Lightsaber-Green.svg';
import RedJedi from '../../images/Sensibleworld-Starwars-Lightsaber-Red.svg';

const Person = ({ people, makeFavorite }) => {
  // console.log(people);
  let allCards = people.map(person => {
    return (
      <article className='card person' key={person.created} id={person.created}>
        <h3>{person.name}</h3>
        <p>{person.birth_year}</p>
        <p>{person.gender}</p>
        <p>{person.height}</p>
        <p>{person.hair_color}</p>
        <img onClick={()=>makeFavorite(person.created, 'people')} className='favorite' src={GreenJedi} alt=''/>
      </article>
    );
  });
  return allCards;
};

Person.propTypes = {
  people: PropTypes.array
};

export default Person;
