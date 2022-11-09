import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faSquareTwitter,
  faSquareGithub
} from "@fortawesome/free-brands-svg-icons";


export default class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='footer-wrapper'>
        <div className='top'>
          <span>More from this Developer:</span>
          <div className='portfolio-icon'>
            <FontAwesomeIcon icon="user-tie" />
          </div>
        </div>
        <div className='bottom'>
          <span>Connect with me!</span>
          <div className='socials'>
            <FontAwesomeIcon icon={faLinkedin} className='linked-in' />
            <FontAwesomeIcon icon={faSquareTwitter} className='twitter' />
            <FontAwesomeIcon icon={faSquareGithub} className='github' />
          </div>
        </div>
      </div>
    );
  }
};