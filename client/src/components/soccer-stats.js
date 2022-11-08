import React, { Component } from 'react';
import axios from 'axios';

export default class SoccerStats extends Component {
  constructor(props) {
    super(props)

    this.getSoccerStat = this.getSoccerStat.bind(this);
    this.soccerStatDeletion = this.soccerStatDeletion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);


    this.state = {
      date_of_game: "",
      minutes: "",
      goals: "",
      assists: "",
      pks: "",
      shots_on_goal: "",
      goals_allowed: "",
      yellow_cards: "",
      red_cards: "",
      url: "http://localhost:5000/api/soccer_stat",
      action: "post",
      soccerStats: []
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
    console.log(this.state)
  }

  handleSubmit(event) {
    axios.post("http://localhost:5000/api/soccer_stat",
      {
        date_of_game: this.state.date_of_game,
        minutes: this.state.minutes,
        goals: this.state.goals,
        assists: this.state.assists,
        pks: this.state.pks,
        shots_on_goal: this.state.shots_on_goal,
        goals_allowed: this.state.goals_allowed,
        yellow_cards: this.state.yellow_cards,
        red_cards: this.state.red_cards,
      })
      .then(response => {
        this.setState({
          date_of_game: "",
          minutes: "",
          goals: "",
          assists: "",
          pks: "",
          shots_on_goal: "",
          goals_allowed: "",
          yellow_cards: "",
          red_cards: "",
          url: "http://localhost:5000/api/soccer_stat",
          action: "post"
        });
        this.getSoccerStat()
      })
      .catch(error => {
        console.log("soccerStat handleSubmit error", error);
      });
    event.preventDefault();
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
        })}

        <div className='newStatLine'>
          <h4>ADD NEW</h4>
        </div>


        <div className='formWrapper'>
          <form onSubmit={this.handleSubmit} className="form">
            <input
              type="text"
              name="date_of_game"
              placeholder="Date"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="minutes"
              placeholder="Minutes"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="goals"
              placeholder="Goals"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="assists"
              placeholder="Assists"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="pks"
              placeholder="PKs"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="shots_on_goal"
              placeholder="S.O.G"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="goals_allowed"
              placeholder="G.A"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="yellow_cards"
              placeholder="Yellow Cards"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="red_cards"
              placeholder="Red Cards"
              onChange={this.handleChange}
            />
            <button className="btn" type="submit">Save</button>
          </form>
        </div>

      </div >
    );
  }
};