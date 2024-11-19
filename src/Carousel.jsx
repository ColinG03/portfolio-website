import React, { useState, useEffect } from 'react';
import './Carousel.css';
import ProjectCard from './ProjectCard';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transform, setTransform] = useState(0);
  const [offset, setOffset] = useState(0);

  const cards = [
    {
      title: "Cryptocurrency Arbitrage Pathfinding",
      imageUrl: "graph.png",
      link: "https://isaiahiruoha.github.io/arbitrage/#/",
      tooltipText: "Check out the website!"
    },
    {
      title: "Bed Match Pro",
      imageUrl: "hospital-bed.png",
      link: "https://www.youtube.com/watch?v=9KXsTzVWBnI&ab_channel=ColinG",
      tooltipText: "Check out the live demo!"
    },
    {
      title: "Breast Cancer Classification",
      imageUrl: "microscope.png",
      link: "https://www.kaggle.com/code/colingould/siyung-cho-advanced-hackathon-starter-notebook",
      tooltipText: "Check out the Kaggle!"
    },
    {
      title: "MealMap: AI Meal Recommendations",
      imageUrl: "meal.png",
      link: "https://github.com/mecsabb/meal-planner",
      tooltipText: "Check out the GitHub!"
    }
  ];

  useEffect(() => {
      const newOffset = (100 - 64) / 2;
      const newTransform = currentIndex * 64;
      setOffset(newOffset);
      setTransform(newTransform);
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length); // Move to the next card
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const getTransform = () => {
    console.log("transform in getTransform", transform);
    return `translateX(calc(${offset}% - ${transform}%))`;
  }
  
  return (
    <div className="carousel-container" >
      <div
        className="carousel-track"
        style={{transform: getTransform()}}
      >
        {cards.map((card, index) => (
          <a
            key={index}
            className={`project-link ${index === currentIndex ? 'active' : ''}`}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectCard
              title={card.title}
              imageUrl={card.imageUrl}
              tooltipText={card.tooltipText}
              active={index === currentIndex}
            />
          </a>
        ))}
      </div>
      <button className="carousel-control left" onClick={handlePrev} disabled={currentIndex === 0}>‹</button>
      <button className="carousel-control right" onClick={handleNext} disabled={currentIndex === 3}>›</button>
    </div>
  );
};

export default Carousel;
