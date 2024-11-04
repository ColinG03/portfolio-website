import React from 'react';
import './Card.css';

function Card({ content1, className }) {
  return (
    <div className={className}>
      <div className="card-content">
        <div className='text-container'>
            <p className="card-text">{content1}</p>

        </div>
      </div>
    </div>
  );
}

export default Card;