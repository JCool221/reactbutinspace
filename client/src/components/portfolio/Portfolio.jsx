import React from 'react';
import data from '../assets/data/portfolioContent.json'
import './portfolio.css';

export default function Portfolio() {
  return (
    <div className='portfolio-container'>
      {
        data.map(content => {          
          console.log(content)
          return (
            <div className='top-level' key={content.id}>
      <div className="hero">
        <img className="hero-img" src={content.image} alt="Full stack tech focused micro blog" />
          <div className="hero-content">
            <h2 className='hero-title'>{content.title}</h2>
            <div className="line"></div>
            <p>{content.description}</p>
            <a className="hero-btn" type="button" href={content.link} value="go to blogstacker">Check it out</a>
          </div>
      </div>

    </div>
  );
})
}
    </div>
  )
}

