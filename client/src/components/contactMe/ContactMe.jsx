import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub,
        faInstagram,
        faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './contactme.css'

function ContactMe() {
  return (
    <div className='contact'>
        <a rel="noreferrer" href="https://www.linkedin.com/in/j-cool42/" target="_blank" className='grid-item-1'>
      <FontAwesomeIcon icon={faLinkedin} className="ico"/>
        </a>
        <a rel="noreferrer" href="https://github.com/JCool221" target="_blank" className='grid-item-2'>
        <FontAwesomeIcon icon={faGithub} className="ico"/>
        </a>
        <a rel="noreferrer" href="mailto: jcool2939@gmail.com" target="_blank" className='grid-item-5'> 
        <FontAwesomeIcon icon={faEnvelope} className="ico"/>
        </a>
        <a rel="noreferrer" href="https://www.facebook.com/jcool2211" target="_blank" className='grid-item-3'>
        <FontAwesomeIcon icon={faFacebook} className="ico"/>
        </a>
        <a rel="noreferrer" href="https://www.instagram.com/jcool_42/" target="_blank" className='grid-item-4'>
        <FontAwesomeIcon icon={faInstagram} className="ico"/>
        </a>


    </div>
  );
}

export default ContactMe;
