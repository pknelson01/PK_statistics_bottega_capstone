import React, { Component } from 'react';
import SoccerStats from '../components/soccer-stats';

export default class Soccer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className='statValuesHeader'>
          <div className='statValues'>
            <span>Date</span>
            <span>Minutes</span>
            <span>Goals</span>
            <span>Assists</span>
            <span>PKs</span>
            <span>S.O.G</span>
            <span>G.A</span>
            <span>Y.C</span>
            <span>R.C</span>
          </div>

          <SoccerStats />
        </div>
      </div >
    );
  }
};