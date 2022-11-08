import React, { Component } from 'react';
import axios from 'axios';

export default class SoccerStats extends Component {
  constructor(props) {
    super(props)

    this.getSoccerStat = this.getSoccerStat.bind(this);
    this.soccerStatDeletion = this.soccerStatDeletion.bind(this);

    this.state = {
      soccerStats: []
    }
  }

  soccerStatDeletion(soccer_stat) {
    axios.delete(`http://localhost:5000/api/soccer_stat/${soccer_stat.id}`)
      .then(response => {
        console.log('stat deleted: ', response)
        this.getSoccerStat();
      })
      .catch(error => {
        console.log("FootBallStatDeletion error: ", error)
      })
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
        {this.state.soccerStats.map((soccer_stat, index) => {
          return (
            <div className='StatsPage' key={index}>
              {/* <div className='date'>
                <span>Date: {stat.date_of_game}</span>
              </div> */}

              <div className='Stats'>
                <span>{soccer_stat.date_of_game}</span>
                <span>{soccer_stat.minutes}</span>
                <span>{soccer_stat.goals}</span>
                <span>{soccer_stat.assists}</span>
                <span>{soccer_stat.pks}</span>
                <span>{soccer_stat.shots_on_goal}</span>
                <span>{soccer_stat.goals_allowed}</span>
                <span>{soccer_stat.yellow_cards}</span>
                <span>{soccer_stat.red_cards}</span>
                <button onClick={() => this.soccerStatDeletion(soccer_stat)}
                >Delete</button>

              </div>
            </div>
          )
        })
        }
      </div >
    );
  }
};