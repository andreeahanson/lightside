import React from 'react';
import './HeaderFav.css';
import { Link } from 'react-router-dom';

const HeaderFav = () => {
  return (
    <header className='title'>
      <Link to='/'>
        <h1>Light Side</h1>
      </Link>
      <p>
        Favorites <span> 0</span>
      </p>
    </header>
  );
};

export default HeaderFav;
