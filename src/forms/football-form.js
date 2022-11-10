// import React, { Component } from 'react';
// import axios from 'axios';

// export default class FootballForm extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       date_of_game: "",
//       touchdowns: "",
//       receiving_yards: "",
//       rushing_yards: "",
//       completions: "",
//       tackles: "",
//       sacks: "",
//       interceptions: "",
//       passing_yards: "",
//       url: "http://localhost:5000/api/football_stat",
//       action: "post"
//     }

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//       errorText: ""
//     });
//     console.log(this.state)
//   }
//   handleSubmit(event) {
//     axios.post(
//       "http://localhost:5000/api/football_stat",
//       {
//         date_of_game: this.state.date_of_game,
//         touchdowns: this.state.touchdowns,
//         receiving_yards: this.state.receiving_yards,
//         rushing_yards: this.state.rushing_yards,
//         completions: this.state.completions,
//         tackles: this.state.tackles,
//         sacks: this.state.sacks,
//         interceptions: this.state.interceptions,
//         passing_yards: this.state.passing_yards
//       })
//       .then(response => {
//         this.setState({
//           date_of_game: "",
//           touchdowns: "",
//           receiving_yards: "",
//           rushing_yards: "",
//           completions: "",
//           tackles: "",
//           sacks: "",
//           interceptions: "",
//           passing_yards: "",
//           url: "http://localhost:5000/api/football_stat",
//           action: "post"
//         });
//       })
//       .catch(error => {
//         console.log("footballStat handleSubmit error", error);
//       });
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div className='formWrapper'>
//         <form onSubmit={this.handleSubmit} className="form">
//           <input
//             type="text"
//             name="date_of_game"
//             placeholder="Date"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="touchdowns"
//             placeholder="Touchdowns"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="receiving_yards"
//             placeholder="Rec.Yards"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="rushing_yards"
//             placeholder="Rush.Yards"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="passing_yards"
//             placeholder="Pass.Yards"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="completions"
//             placeholder="Completions"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="sacks"
//             placeholder="Sacks"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="tackles"
//             placeholder="Tackles"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="interceptions"
//             placeholder="Interceptions"
//             onChange={this.handleChange}
//           />
//           <button className="btn" type="submit">Save</button>
//         </form>
//       </div>
//     );
//   }
// };


