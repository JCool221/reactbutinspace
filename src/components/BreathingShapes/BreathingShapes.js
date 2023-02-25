import React from 'react';
import "./breathingShapes.css"


const BreathingShapes = () => {

    const colors = ['var(--pale-azure)', 'var(--cyclamen)', 'var(--atomic-tangerine)', 'var(--naples-yellow)', 'var(--mindaro)', 'var(--fandango)', 'var(--melon)', 'var(--dutch-white)', 'var(--ice-blue)',];
const shapes = ['shape1', 'shape2', 'shape3', 'shape4', 'shape5', 'shape6', 'shape7', 'shape8']



let intervalID;

const setRandomColorandShape = () => {
    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
    const getRandomShape = () => shapes[Math.floor(Math.random() * shapes.length)];
    const elements = document.querySelectorAll('.shape');
    
    elements.forEach(element => {
        element.style.backgroundColor = getRandomColor();
        element.classList.remove(...shapes);
        element.classList.add(getRandomShape());
    });
}

const startAnimation = () => {
    setRandomColorandShape()
    intervalID = setInterval(setRandomColorandShape, 2000);
};

const stopAnimation = () => {
    clearInterval(intervalID)
};

// const elements = document.querySelectorAll('.shape');
// elements.forEach(element => {
//     element.addEventListener('mouseover', stopAnimation);
//     element.addEventListener('mouseout', startAnimation);
// })

const handleMouseover = e => {
  
}

startAnimation();

  return (
    <div className='shape-container'>
      <div className='shape'></div>
      <div className='shape'></div>
      <div className='shape'></div>
      <div className='shape'></div>
      <div className='shape'></div>
      <div className='shape'></div>
    </div>
  );
}

export default BreathingShapes;
