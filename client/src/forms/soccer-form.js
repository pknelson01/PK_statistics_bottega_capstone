// import React, { Component } from 'react';
// import axios from 'axios';

// export default class SoccerForm extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       date_of_game: "",
//       minutes: "",
//       goals: "",
//       assists: "",
//       pks: "",
//       shots_on_goal: "",
//       goals_allowed: "",
//       yellow_cards: "",
//       red_cards: "",
//       url: "http://localhost:5000/api/soccer_stat",
//       action: "post"
//     }

//     this.buildForm = this.buildForm.bind(this);
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
//     axios.post("http://localhost:5000/api/soccer_stat",
//       {
//         date_of_game: this.state.date_of_game,
//         minutes: this.state.minutes,
//         goals: this.state.goals,
//         assists: this.state.assists,
//         pks: this.state.pks,
//         shots_on_goal: this.state.shots_on_goal,
//         goals_allowed: this.state.goals_allowed,
//         yellow_cards: this.state.yellow_cards,
//         red_cards: this.state.red_cards,
//       })
//       .then(response => {
//         this.setState({
//           date_of_game: "",
//           minutes: "",
//           goals: "",
//           assists: "",
//           pks: "",
//           shots_on_goal: "",
//           goals_allowed: "",
//           yellow_cards: "",
//           red_cards: "",
//           url: "http://localhost:5000/api/soccer_stat",
//           action: "post"
//         });
//       })
//       .catch(error => {
//         console.log("soccerStat handleSubmit error", error);
//       });
//     event.preventDefault();
//   }


//   buildForm() {
//     let formData = new FormData();

//     formData.append("soccer_stat[date_of_game]", this.state.date_of_game);
//     formData.append("soccer_stat[Minutes]", this.state.minutes);
//     formData.append("soccer_stat[Goals]", this.state.goals);
//     formData.append("soccer_stat[assists]", this.state.assists);
//     formData.append("soccer_stat[red_cards]", this.state.red_cards);
//     formData.append("soccer_stat[shots_on_goal]", this.state.shots_on_goal);
//     formData.append("soccer_stat[goals_allowed]", this.state.goals_allowed);
//     formData.append("soccer_stat[pks]", this.state.pks);
//     formData.append("soccer_stat[yellow_cards]", this.state.yellow_cards);

//     return formData;
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
//             name="minutes"
//             placeholder="Minutes"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="goals"
//             placeholder="Goals"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="assists"
//             placeholder="Assists"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="pks"
//             placeholder="PKs"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="shots_on_goal"
//             placeholder="S.O.G"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="goals_allowed"
//             placeholder="G.A"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="yellow_cards"
//             placeholder="Yellow Cards"
//             onChange={this.handleChange}
//           />
//           <input
//             type="text"
//             name="red_cards"
//             placeholder="Red Cards"
//             onChange={this.handleChange}
//           />
//           <button className="btn" type="submit">Save</button>
//         </form>
//       </div>
//     );
//   }
// };


