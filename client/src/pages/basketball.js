import React, { Component } from 'react';
import BasketballStats from '../components/basketball-stats';
import BasketballForm from '../forms/basketball-form';
import axios from 'axios';

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

        <div className='newStatLine'>
          <h4>ADD NEW</h4>
        </div>
        <BasketballForm />
      </div >
    );
  }
};