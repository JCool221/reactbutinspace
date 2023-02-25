import React from 'react';
import image from '../images/blogstacker.png';
import data from './assets/data/portfolioContent.json'
import './portfolio.css';

export default function Portfolio() {
  return (
    <div className='top-level'>
      <div className="hero">
        <img className="hero-img" src={data.image} alt="Full stack tech focused micro blog" />
          <div className="hero-content">
            <h2 className='hero-title'>{data.title}</h2>
            <div className="line"></div>
            <p>A RESTful full stack tech focused micro-blog utilizing NodeJS, ExpressJS, Handlebars, MYSQL, NPM and more. </p>
            <a className="hero-btn" type="button" onclick={data.link} value="go to blogstacker">Check it out</a>
          </div>
      </div>

    </div>
  );
}
