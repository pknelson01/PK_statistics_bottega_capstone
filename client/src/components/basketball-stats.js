import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class BasketballStats extends Component {
  constructor(props) {
    super(props)

    this.getBasketballStat = this.getBasketballStat.bind(this);
    this.basketBallStatDeletion = this.basketBallStatDeletion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      date_of_game: "",
      points: "",
      assists: "",
      rebounds: "",
      steals: "",
      blocks: "",
      turn_overs: "",
      fouls: "",
      minutes: "",
      url: "http://localhost:5000/api/basketball_stat",
      action: "POST",
      basketballStats: []
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }


  handleSubmit(event) {
    axios.post(this.state.url,
      {
        date_of_game: this.state.date_of_game,
        points: this.state.points,
        assists: this.state.assists,
        rebounds: this.state.rebounds,
        steals: this.state.steals,
        blocks: this.state.blocks,
        minutes: this.state.minutes,
        fouls: this.state.fouls,
        turn_overs: this.state.turn_overs
      })
      .then(response => {
        this.setState({
          date_of_game: "",
          points: "",
          assists: "",
          rebounds: "",
          steals: "",
          blocks: "",
          turn_overs: "",
          fouls: "",
          minutes: "",
          url: "http://localhost:5000/api/basketball_stat",
          action: "POST"
        });
        console.log('handleSubmit response: ', response)
        this.getBasketballStat();
      })
      .catch(error => {
        console.log("BasketballStat handleSubmit error", error);
      });
    console.log(this.state)
    event.preventDefault();
  }


  basketBallStatDeletion(basketball_stat) {
    axios.delete(`http://localhost:5000/api/basketball_stat/${basketball_stat.id}`)
      .then(response => {
        console.log('stat deleted: ', response)
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
                <button className='deleteButton' onClick={() => this.basketBallStatDeletion(basketball_stat)}
                >
                  <FontAwesomeIcon icon="square-minus" />
                </button>
              </div>
            </div>
          )
        })}

        <div className='newStatLine'>
          <h4>ADD NEW</h4>
        </div>


        <div className='formWrapper'>
          <form onSubmit={this.handleSubmit} className="form">
            <input
              className='date'
              type="text"
              name="date_of_game"
              placeholder="Date"
              value={this.state.date_of_game}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="minutes"
              placeholder="Minutes"
              value={this.state.minutes}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="points"
              placeholder="Points"
              value={this.state.points}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="assists"
              placeholder="Assists"
              value={this.state.assists}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="rebounds"
              placeholder="Rebounds"
              value={this.state.rebounds}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="steals"
              placeholder="Steals"
              value={this.state.steals}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="blocks"
              placeholder="Blocks"
              value={this.state.blocks}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="fouls"
              placeholder="Fouls"
              value={this.state.fouls}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="turn_overs"
              placeholder="Turn Overs"
              value={this.state.turn_overs}
              onChange={this.handleChange}
            />
            <button className="btn" type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
};