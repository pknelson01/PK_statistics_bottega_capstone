import React, { Component } from 'react';
import BasketballOne from '../images/media-scroller-images/basketballOne.JPG';
import BasketballTwo from '../images/media-scroller-images/basketballTwo.JPG';
import BasketballThree from '../images/media-scroller-images/basketballThree.JPG';
import BasketballFour from '../images/media-scroller-images/basketballFour.jpeg';
import BasketballFive from '../images/media-scroller-images/basketballFive.jpeg';
import FootballOne from '../images/media-scroller-images/footballOne.JPG';
import FootballTwo from '../images/media-scroller-images/footballTwo.JPG';
import FootballThree from '../images/media-scroller-images/footballThree.jpeg';
import LeBron from '../images/lebron.jpg';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='home-page'>
        {/* <div className='greeting'>
          <h1>ALL YOUR STATS AND SPORTS IN THE SAME PLACE</h1>
        </div> */}

        <div className='hero-section'>
          <div className='text'>
            <h1>PK Statistics</h1>
            <h3>Start tracking today!</h3>
          </div>
          <div className='image'>
            <img src={LeBron}></img>
          </div>
        </div>

        {/* Have a welcome screen and below that will be a Carousel of cool images from each sport consider making it dynamic so the user can put his/her own pictures in there. */}


        <div>
          <div className='media-scroller'>
            <div className='media-element'>
              <img src={BasketballOne}></img>
              <p>Carlos Monroy || CVHS</p>
            </div>
            <div className='media-element'>
              <img src={FootballOne}></img>
              <p>Jett Vance || WHS</p>
            </div>
            <div className='media-element'>
              <img src={BasketballTwo}></img>
              <p>Kobe Shaw || WHS</p>
            </div>
            <div className='media-element'>
              <img src={FootballTwo}></img>
              <p>Jett Vance || WHS</p>
            </div>
            <div className='media-element'>
              <img src={BasketballThree}></img>
              <p>Preston Bushman || The Final Four</p>
            </div>
            <div className='media-element'>
              <img src={FootballThree}></img>
              <p>Jett Vance || WHS</p>
            </div>
            <div className='media-element'>
              <img src={BasketballFour}></img>
              <p>Parker Nelson || WHS</p>
            </div>
            <div className='media-element'>
              <img src={BasketballFive}></img>
              <p>Parker Nelson || WHS</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};