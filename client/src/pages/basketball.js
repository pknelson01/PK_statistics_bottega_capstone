import React, { Component } from 'react';
import BasketballStats from '../components/basketball-stats';
import Footer from '../components/footer';

export default class BasketBall extends Component {
  constructor(props) {
    super(props)

    this.state = {
      basketballStats: []
    }
  }

  render() {
    return (
      <div>
        <div className='statValuesHeader'>
          <div className='statValues'>
            <span>Date</span>
            <span>Minutes</span>
            <span>Points</span>
            <span>Assists</span>
            <span>Rebounds</span>
            <span>Steals</span>
            <span>Blocks</span>
            <span>Fouls</span>
            <span>Turn Overs</span>
          </div>
          <BasketballStats />
        </div>

        {/* Look into adding in a footer links to socials and portfolio */}

        {/* <div className='spacer100'></div>
        <Footer /> */}
      </div >
    );
  }
};