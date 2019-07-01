import React from 'react';
import './HeaderFav.css';

const HeaderFav = () => {
  return(
    <header>
      <div className='title'>
        <h1>Light Side</h1>
        <p>View Favorites <span> 0</span></p>
      </div>
      <div>
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
      </div>
    </header>
  )
}

export default HeaderFav;