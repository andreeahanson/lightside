import React from 'react';
import './IntroStory.css';

const IntroStory = ({ films }) => {
  const movie = films[Math.floor(Math.random() * films.length)] || {};
  return (
    <aside>
      <p>{movie.opening_crawl}</p>
      <h3>{movie.title}</h3>
      <h4>{movie.release_date}</h4>
    </aside>
  );
};

export default IntroStory;
