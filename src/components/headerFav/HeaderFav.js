import React from 'react';
import './HeaderFav.css';
import { Link } from 'react-router-dom';

const HeaderFav = ({favorites}) => {
  return (
    <header className='title'>
      <Link to='/'>
        <h1>Light Side</h1>
      </Link>
      <Link to='/favorites'>
        <p>
          Favorites <span>{favorites}</span>
        </p>
      </Link>
    </header>
  );
};

export default HeaderFav;
