import React, { Component } from 'react';
import BasketballTwo from '../images/media-scroller-images/basketballTwo.JPG';
import BasketballFour from '../images/media-scroller-images/basketballFour.jpeg';
import BasketballFive from '../images/media-scroller-images/basketballFive.jpeg';
import FootballFour from '../images/media-scroller-images/footballFour.JPG';
import FootballSix from '../images/media-scroller-images/footballSix.JPG';
import FootballSeven from '../images/media-scroller-images/footballSeven.JPG';
import SoccerOne from '../images/media-scroller-images/soccerOne.JPG';
import SoccerTwo from '../images/media-scroller-images/soccerTwo.JPG';
import SoccerThree from '../images/media-scroller-images/soccerThree.JPG';
import Field from '../images/hero-section-background.jpeg';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='home-page'>

        {/* Have a welcome screen and below that will be a Carousel of cool images from each sport consider making it dynamic so the user can put his/her own pictures in there. */}

        <div className='hero-section' style={{
          backgroundImage: `url(${Field})`,
        }}>
          <div className='text'>
            <h1>PK Statistics</h1>
            <h3>Start tracking today!</h3>
          </div>
        </div>


        <div>
          <div className='media-scroller'>
            <div className='media-element'>
              <img src={BasketballFour}></img>
              <p>Parker Nelson || WHS</p>
            </div>
            <div className='media-element'>
              <img src={FootballSeven}></img>
              <p>Jett Vance || WHS</p>
            </div>
            <div className='media-element'>
              <img src={SoccerOne}></img>
              <p>Zach Liffereth || SC</p>
            </div>
            <div className='media-element'>
              <img src={BasketballTwo}></img>
              <p>Kobe Shaw || WHS</p>
            </div>
            <div className='media-element'>
              <img src={FootballFour}></img>
              <p>Jace Hayes || TC</p>
            </div>
            <div className='media-element'>
              <img src={SoccerTwo}></img>
              <p>Alex Fritcher || UVU</p>
            </div>
            <div className='media-element'>
              <img src={BasketballFive}></img>
              <p>Parker Nelson & Kobe Shaw || WHS</p>
            </div>
            <div className='media-element'>
              <img src={FootballSix}></img>
              <p>Westlake HS</p>
            </div>
            <div className='media-element'>
              <img src={SoccerThree}></img>
              <p>Zach Liffereth || SC</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};