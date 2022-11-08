import React, { Component } from 'react';
import axios from 'axios';

export default class FootballStats extends Component {
  constructor(props) {
    super(props)

    this.getFootballStat = this.getFootballStat.bind(this);
    this.FootBallStatDeletion = this.FootBallStatDeletion.bind(this);

    this.state = {
      footballStats: []
    }
  }

  FootBallStatDeletion(football_stat) {
    axios.delete(`http://localhost:5000/api/football_stat/${football_stat.id}`)
      .then(response => {
        console.log('stat deleted: ', response)
        this.getFootballStat();
      })
      .catch(error => {
        console.log("FootBallStatDeletion error: ", error)
      })
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
        {this.state.footballStats.map((football_stat, index) => {
          return (
            <div className='StatsPage' key={index}>
              <div className='Stats'>
                <span>{football_stat.date_of_game}</span>
                <span>{football_stat.touchdowns}</span>
                <span>{football_stat.receiving_yards}</span>
                <span>{football_stat.rushing_yards}</span>
                <span>{football_stat.passing_yards}</span>
                <span>{football_stat.completions}</span>
                <span>{football_stat.sacks}</span>
                <span>{football_stat.tackles}</span>
                <span>{football_stat.interceptions}</span>
                <button onClick={() => this.FootBallStatDeletion(football_stat)}
                >Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
};