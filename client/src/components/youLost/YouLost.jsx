import React from 'react';
import {Link} from 'react-router-dom'
import './youLost.css'

function YouLost() {
  return (
    <div className='lost'>
      <h1>You Lost?</h1>
        <Link to={'AboutMe'}>Go Back</Link>
    </div>
  );
}

export default YouLost;
