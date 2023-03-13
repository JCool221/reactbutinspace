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
        <a href="#">
      <FontAwesomeIcon icon={faLinkedin} className="ico"/>
        </a>
        <a href="#">
        <FontAwesomeIcon icon={faGithub} className="ico"/>
        </a>
        <a href="#">
        <FontAwesomeIcon icon={faEnvelope} className="ico"/>
        </a>
        <a href="#">
        <FontAwesomeIcon icon={faFacebook} className="ico"/>
        </a>
        <a href="#">
        <FontAwesomeIcon icon={faInstagram} className="ico"/>
        </a>


    </div>
  );
}

export default ContactMe;
