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
      <div className='footer-wrapper' style={{
      }} >
        <div className='top'>
          <span>More from this Developer:</span>
          <div className='portfolio-icon'>
            <a href='https://pen-react-portfolio.herokuapp.com/' target="_blank">
              <FontAwesomeIcon icon="user-tie" className='user' />
            </a>
          </div>
        </div>
        <div className='bottom'>
          <span>Connect with me!</span>
          <div className='socials'>
            <a href='https://www.linkedin.com/in/parker-nelson-27a819241/' target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className='linked-in' />
            </a>
            <a href='https://twitter.com/parkernelsondev' target="_blank">
              <FontAwesomeIcon icon={faSquareTwitter} className='twitter' />
            </a>
            <a href='https://github.com/pknelson01' target="_blank">
              <FontAwesomeIcon icon={faSquareGithub} className='github' />
            </a>
          </div>
        </div>
      </div>
    );
  }
};