import React, { useState } from 'react';
import './Carousel.css';
import ProjectCard from './ProjectCard';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards = [
    {
      title: "Cryptocurrency Arbitrage Pathfinding",
      imageUrl: "graph.png",
      link: "https://isaiahiruoha.github.io/arbitrage/#/",
      tooltipText: "Check out the website!"
    },
    {
      title: "Bed Match Pro",
      imageUrl: "/hospital-bed.png",
      link: "https://www.youtube.com/watch?v=9KXsTzVWBnI&ab_channel=ColinG",
      tooltipText: "Check out the live demo!"
    },
    {
      title: "Breast Cancer Classification",
      imageUrl: "/microscope.png",
      link: "https://www.kaggle.com/code/colingould/siyung-cho-advanced-hackathon-starter-notebook",
      tooltipText: "Check out the Kaggle!"
    },
    {
      title: "MealMap: AI Meal Recommendations",
      imageUrl: "/meal.png",
      link: "https://github.com/mecsabb/meal-planner",
      tooltipText: "Check out the GitHub!"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length); // Move to the next card
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length); // Move to the previous card
  };

//   const calculateTransform = () => {
//     const cardWidthPercentage = 60; // The card takes up 60% of the container width
//     const visibleWidth = 80; // The visible container is 80% width
//     const sideSpace = (visibleWidth - cardWidthPercentage) / 2; // The space on the left and right sides for centering
//     const moveDistance = cardWidthPercentage + 4; // Adjust the movement distance, accounting for the margin (60% width + 2% margin each side)
  
//     return `translateX(calc(-${currentIndex * moveDistance}% + ${sideSpace}%))`; // Move the carousel by the card width with offset
//   };

const calculateTransform = () => {
    const totalCards = cards.length;
    const cardWidth = 60; // Card width as a percentage of the container
    const gapBetweenCards = 4; // Gap between cards (2% margin on each side)
    
    // Each move will be (cardWidth + gapBetweenCards), and we need to adjust
    const movePercentage = currentIndex * (cardWidth + gapBetweenCards);
    const initialOffset = (100 - cardWidth) / 2; // Initial offset to center the first card
    
    return `translateX(calc(-${movePercentage}% + ${initialOffset}%))`;
  };
  
  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: calculateTransform() }}
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
              content1={""}
              imageUrl={card.imageUrl}
              tooltipText={card.tooltipText}
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
