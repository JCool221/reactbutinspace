import React from 'react';
import image from '../images/blogstacker.png';
import './portfolio.css';

export default function Portfolio() {
  return (
    <div>
      <div className="hero">
        <img className="hero-img" src={image} alt="Full stack tech focused micro blog" />
          <div className="hero-content">
            <h2 className='hero-title'>blogstacker</h2>
            <div className="line"></div>
            <p>A RESTful full stack tech focused micro-blog utilizing NodeJS, ExpressJS, Handlebars, MYSQL, NPM and more. </p>
            <button className="hero-btn" type="button" onclick="location.href='https://glacial-everglades-68873.herokuapp.com/';" value="go to blogstacker">Check it out</button>
          </div>
      </div>

    </div>
  );
}
