import React from 'react';
import Crawl from 'react-star-wars-crawl';
import PropTypes from 'prop-types';
import './Landing.css';

const Landing = ({ films }) => {
  const movie = films[Math.floor(Math.random() * films.length)] || {};
  return (
    <Crawl>
      <h3>{movie.title}</h3>
      <p>{movie.opening_crawl}</p>
      <h4>{movie.release_date}</h4>
    </Crawl>
  );
};

Landing.propTypes = {
  films: PropTypes.array
};

export default Landing;
