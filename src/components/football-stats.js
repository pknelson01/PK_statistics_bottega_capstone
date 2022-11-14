import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class FootballStats extends Component {
  constructor(props) {
    super(props)

    this.getFootballStat = this.getFootballStat.bind(this);
    this.FootBallStatDeletion = this.FootBallStatDeletion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      date_of_game: "",
      touchdowns: "",
      receiving_yards: "",
      rushing_yards: "",
      completions: "",
      tackles: "",
      sacks: "",
      interceptions: "",
      passing_yards: "",
      url: "https://pk-statistics-backend.herokuapp.com/api/football_stat",
      // url: "http://localhost:5000/api/football_stat",
      action: "POST",
      footballStats: []
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  // What is use to communicate with the backend when I want to POST and entry

  handleSubmit(event) {
    axios.post(
      "https://pk-statistics-backend.herokuapp.com/api/football_stat",
      // "http://localhost:5000/api/football_stat",
      {
        date_of_game: this.state.date_of_game,
        touchdowns: this.state.touchdowns,
        receiving_yards: this.state.receiving_yards,
        rushing_yards: this.state.rushing_yards,
        completions: this.state.completions,
        tackles: this.state.tackles,
        sacks: this.state.sacks,
        interceptions: this.state.interceptions,
        passing_yards: this.state.passing_yards
      })
      .then(response => {
        this.setState({
          date_of_game: "",
          touchdowns: "",
          receiving_yards: "",
          rushing_yards: "",
          completions: "",
          tackles: "",
          sacks: "",
          interceptions: "",
          passing_yards: "",
          url: "https://pk-statistics-backend.herokuapp.com/api/football_stat",
          // url: "http://localhost:5000/api/football_stat",
          action: "POST"
        });
        this.getFootballStat();
      })
      .catch(error => {
        console.log("footballStat handleSubmit error", error);
      });
    event.preventDefault();
  }

  // What is use to communicate with the backend when I want to DELETE and entry


  FootBallStatDeletion(football_stat) {
    axios.delete(`https://pk-statistics-backend.herokuapp.com/api/football_stat/${football_stat.id}`)
      // axios.delete(`http://localhost:5000/api/football_stat/${football_stat.id}`)
      .then(response => {
        console.log('stat deleted: ', response)
        this.getFootballStat();
      })
      .catch(error => {
        console.log("FootBallStatDeletion error: ", error)
      })
  }

  // What is use to communicate with the backend when I want to GET and entry

  getFootballStat() {
    axios.get("https://pk-statistics-backend.herokuapp.com/api/football_stats")
      // axios.get("http://localhost:5000/api/football_stats")
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

  // LifeCycle Method

  componentDidMount() {
    this.getFootballStat()
  }

  render() {
    return (
      <div style={{ "color": "white" }}>
        {this.state.footballStats.map((football_stat, index) => {
          return (
            <div className='StatsComponent' key={index}>
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
                <button className='deleteButton' onClick={() => this.FootBallStatDeletion(football_stat)}
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
              type="text"
              name="date_of_game"
              placeholder="Date"
              value={this.state.date_of_game}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="touchdowns"
              placeholder="Touchdowns"
              value={this.state.touchdowns}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="receiving_yards"
              placeholder="Rec.Yards"
              value={this.state.receiving_yards}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="rushing_yards"
              placeholder="Rush.Yards"
              value={this.state.rushing_yards}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="passing_yards"
              placeholder="Pass.Yards"
              value={this.state.passing_yards}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="completions"
              placeholder="Completions"
              value={this.state.completions}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="sacks"
              placeholder="Sacks"
              value={this.state.sacks}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="tackles"
              placeholder="Tackles"
              value={this.state.tackles}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="interceptions"
              placeholder="Interceptions"
              value={this.state.interceptions}
              onChange={this.handleChange}
            />
            <button className="btn" type="submit">
              <FontAwesomeIcon icon="square-check" />
            </button>
          </form>
        </div>

      </div>
    );
  }
};