import React, { Component } from 'react';
import axios from 'axios';

export default class BasketballStats extends Component {
  constructor(props) {
    super(props)

    this.getBasketballStat = this.getBasketballStat.bind(this);
    this.basketBallStatDeletion = this.basketBallStatDeletion.bind(this);

    this.state = {
      basketballStats: []
    }
  }

  basketBallStatDeletion(basketball_stat) {
    axios.delete(`http://localhost:5000/api/basketball_stat/${basketball_stat.id}`)
      .then(response => {
        console.log(response)
        this.getBasketballStat();
      })
      .catch(error => {
        console.log("basketBallStatDeletion error: ", error)
      })
  }

  getBasketballStat() {
    axios.get("http://localhost:5000/api/basketball_stats")
      .then(response => {
        this.setState({
          basketballStats: response.data
        })
        console.log('basketball stats: ', response.data)
      })
      .catch(error => {
        console.log("GetBasketballStat error:", error)
      })
  }

  componentDidMount() {
    this.getBasketballStat()
  }


  render() {
    return (
      <div style={{ "color": "white" }}>
        {this.state.basketballStats.map((basketball_stat, index) => {
          return (
            <div className='StatsPage' key={index}>
              <div className='Stats'>
                <span>{basketball_stat.date_of_game}</span>
                <span>{basketball_stat.minutes}</span>
                <span>{basketball_stat.points}</span>
                <span>{basketball_stat.assists}</span>
                <span>{basketball_stat.rebounds}</span>
                <span>{basketball_stat.steals}</span>
                <span>{basketball_stat.blocks}</span>
                <span>{basketball_stat.fouls}</span>
                <span>{basketball_stat.turn_overs}</span>
                <button onClick={() => this.basketBallStatDeletion(basketball_stat)}
                >Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
};