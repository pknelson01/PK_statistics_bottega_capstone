import React, { Component } from 'react';
import axios from 'axios';

export default class SoccerStats extends Component {
  constructor(props) {
    super(props)

    this.getSoccerStat = this.getSoccerStat.bind(this);

    this.state = {
      soccerStats: []
    }
  }

  getSoccerStat() {
    axios.get("http://localhost:5000/api/soccer_stats")
      .then(response => {
        this.setState({
          soccerStats: response.data
        })
        console.log('Soccer stats: ', response.data)
      })
      .catch(error => {
        console.log("getSoccerStat error:", error)
      })
  }

  componentDidMount() {
    this.getSoccerStat()
  }

  render() {
    return (
      <div style={{ "color": "white" }}>
        {this.state.soccerStats.map((stat) => {
          return (
            <div className='StatsPage'>
              {/* <div className='date'>
                <span>Date: {stat.date_of_game}</span>
              </div> */}

              <div className='Stats'>
                <span>{stat.date_of_game}</span>
                <span>{stat.minutes}</span>
                <span>{stat.goals}</span>
                <span>{stat.assists}</span>
                <span>{stat.pks}</span>
                <span>{stat.shots_on_goal}</span>
                <span>{stat.goals_allowed}</span>
                <span>{stat.yellow_cards}</span>
                <span>{stat.red_cards}</span>

              </div>
            </div>
          )
        })}
      </div>
    );
  }
};