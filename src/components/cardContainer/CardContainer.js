import React from 'react';
import './CardContainer.css';
import Card from '../card/Card';

const CardContainer = ({results}) => {
    return(
      <div>
      <h1>Select a Category</h1>
      <section className="card-container">
      <Card results={results}/>
      </section>
      </div>

    )
}

export default CardContainer;