import React, { Component } from 'react';
import axios from 'axios';

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
      url: "http://localhost:5000/api/football_stat",
      action: "POST",
      footballStats: []
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
    axios.post(
      "http://localhost:5000/api/football_stat",
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
          url: "http://localhost:5000/api/football_stat",
          action: "POST"
        });
        this.getFootballStat();
      })
      .catch(error => {
        console.log("footballStat handleSubmit error", error);
      });
    event.preventDefault();
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
              name="touchdowns"
              placeholder="Touchdowns"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="receiving_yards"
              placeholder="Rec.Yards"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="rushing_yards"
              placeholder="Rush.Yards"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="passing_yards"
              placeholder="Pass.Yards"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="completions"
              placeholder="Completions"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="sacks"
              placeholder="Sacks"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="tackles"
              placeholder="Tackles"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="interceptions"
              placeholder="Interceptions"
              onChange={this.handleChange}
            />
            <button className="btn" type="submit">Save</button>
          </form>
        </div>

      </div>
    );
  }
};