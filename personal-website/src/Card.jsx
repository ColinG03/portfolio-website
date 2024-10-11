import React from 'react';
import './Card.css';

function Card({ title, content1, content2, imageUrl1, imageUrl2, imageUrl3 }) {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className='text-container'>
            <p className="card-text">{content1}</p>
            {imageUrl1 && <img src={imageUrl1} alt={title} className="card-image queens" />}
            <p className="card-text">{content2}</p>
            <div className='double-image'>
                <div className='left-image'>
                    <a href="https://qmind.ca/" target="_blank" rel="noopener noreferrer">
                    {imageUrl2 && <img src={imageUrl2} alt={title} className="card-image clubs" />}
                    </a>                    
                    <span className='tooltip'>QMIND</span>
                </div>
                <div className='right-image'>
                    <a href="https://www.ceec.live/" target="_blank" rel="noopener noreferrer">
                        {imageUrl3 && <img src={imageUrl3} alt={title} className="card-image clubs" />}
                    </a>
                    <span className='tooltip'>CEEC</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;