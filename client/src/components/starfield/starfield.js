import React from "react";
import './starfield.css';

// parallax pixel starfield background adapted from WebDev Shorts https://www.youtube.com/watch?v=aywzn9cf-_U

const Starfield = () => {
    return(
        <article className="starfield">
            <section className="stars"></section>
            <section className="stars2"></section>
            <section className="stars3"></section>
        </article>
    )
} 

export default Starfield;