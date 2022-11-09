import React, { Component } from 'react';
import FootballStats from '../components/football-stats';

export default class FootBall extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className='statValuesHeader'>
          <div className='statValues'>
            <span>Date</span>
            <span>Touchdowns</span>
            <span>Rec.Yards</span>
            <span>Rush.Yards</span>
            <span>Pass.Yards</span>
            <span>Completions</span>
            <span>Sacks</span>
            <span>Tackles</span>
            <span>Interceptions</span>
          </div>
          <FootballStats />
        </div>
      </div >
    );
  }
};