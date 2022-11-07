import React, { Component } from 'react';
import axios from 'axios';

export default class FootballStats extends Component {
  constructor(props) {
    super(props)

    this.getFootballStat = this.getFootballStat.bind(this);

    this.state = {
      footballStats: []
    }
  }

  getFootballStat() {
    axios.get("http://localhost:5000/api/football_stats")
      .then(response => {
        this.setState({
          footballStats: response.data
        })
        console.log('football stats: ', response.data)
      })
      .catch(error => {
        console.log("getFootballStat error:", error)
      })
  }

  componentDidMount() {
    this.getFootballStat()
  }

  render() {
    return (
      <div style={{ "color": "white" }}>
        {this.state.footballStats.map((stat) => {
          return (
            <div className='StatsPage'>
              {/* <div className='date'>
                <span>Date: {stat.date_of_game}</span>
              </div> */}

              <div className='Stats'>
                <span>{stat.date_of_game}</span>
                <span>{stat.touchdowns}</span>
                <span>{stat.receiving_yards}</span>
                <span>{stat.rushing_yards}</span>
                <span>{stat.passing_yards}</span>
                <span>{stat.completions}</span>
                <span>{stat.sacks}</span>
                <span>{stat.tackles}</span>
                <span>{stat.interceptions}</span>

              </div>
            </div>
          )
        })}
      </div>
    );
  }
};