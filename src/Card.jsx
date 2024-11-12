import React from 'react';
import './Card.css';

function Card({ content1, className, style }) {
  return (
    <div className={className} style={style}>
      <div className="card-content">
        <div className='text-container'>
            <p className="card-text">{content1}</p>

        </div>
      </div>
    </div>
  );
}

export default Card;