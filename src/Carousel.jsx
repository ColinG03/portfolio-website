import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import ProjectCard from './ProjectCard';

const Carousel = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

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
  
  return (
    <div className="carousel-container">
      <Slider className="carousel" {...settings}>
        <div className="project-container">
        <a href={cards[0].link} target="_blank" rel="noopener noreferrer">
            <ProjectCard className="project-card"
                    title={cards[0].title}
                    imageUrl={cards[0].imageUrl}
                    tooltipText={cards[0].tooltipText}
                  />
          </a>
        </div>

        <div className="project-container">
        <a href={cards[1].link} target="_blank" rel="noopener noreferrer">
            <ProjectCard className="project-card"
                    title={cards[1].title}
                    imageUrl={cards[1].imageUrl}
                    tooltipText={cards[1].tooltipText}
                  />
          </a>
        </div>

        <div className="project-container">
          <a href={cards[2].link} target="_blank" rel="noopener noreferrer">
              <ProjectCard className="project-card"
                      title={cards[2].title}
                      imageUrl={cards[2].imageUrl}
                      tooltipText={cards[2].tooltipText}
                    />
            </a>
        </div>

        <div className="project-container">
          <a href={cards[3].link} target="_blank" rel="noopener noreferrer">
            <ProjectCard className="project-card"
                    title={cards[3].title}
                    imageUrl={cards[3].imageUrl}
                    tooltipText={cards[3].tooltipText}
                  />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
