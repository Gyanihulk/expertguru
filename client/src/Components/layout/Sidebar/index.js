import './index.scss';

import React from 'react'
import { Link ,NavLink} from 'react-router-dom';
/* import Logo from '../../Assets/images/logo-s.png';
import LogoSubtitle from '../../Assets/images/logo_sub.png' */
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {return(
<div className="nav-bar">
    <Link className='logo' to="/">
        {/* <img src={Logo} alt="logo"/>
        <img className='sub-logo'src={LogoSubtitle} alt="Adamya Kumar"/> */}
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
    )}

export default Sidebar