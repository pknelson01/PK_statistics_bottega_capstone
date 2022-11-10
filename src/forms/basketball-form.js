// // import React, { Component } from 'react';
// // import axios from 'axios';

// // export default class BasketballForm extends Component {
// //   constructor(props) {
// //     super(props)

// //     this.state = {
// //       date_of_game: "",
// //       points: "",
// //       assists: "",
// //       rebounds: "",
// //       steals: "",
// //       blocks: "",
// //       turn_overs: "",
// //       fouls: "",
// //       minutes: "",
// //       url: "http://localhost:5000/api/basketball_stat",
// //       action: "POST"
// //     }

// //     this.handleSubmit = this.handleSubmit.bind(this);
// //     this.handleChange = this.handleChange.bind(this);
// //   }

// //   handleChange(event) {
// //     this.setState({
// //       [event.target.name]: event.target.value,
// //       errorText: ""
// //     });
// //     console.log(this.state)
// //   }

// //   handleSubmit(event) {
// //     axios.post(this.state.url,
// //       {
// //         date_of_game: this.state.date_of_game,
// //         points: this.state.points,
// //         assists: this.state.assists,
// //         rebounds: this.state.rebounds,
// //         steals: this.state.steals,
// //         blocks: this.state.blocks,
// //         minutes: this.state.minutes,
// //         fouls: this.state.fouls,
// //         turn_overs: this.state.turn_overs
// //       })
// //       .then(response => {
// //         this.setState({
// //           date_of_game: "",
// //           points: "",
// //           assists: "",
// //           rebounds: "",
// //           steals: "",
// //           blocks: "",
// //           turn_overs: "",
// //           fouls: "",
// //           minutes: "",
// //           url: "http://localhost:5000/api/basketball_stat",
// //           action: "POST"
// //         });
// //         console.log('handleSubmit response: ', response)
// //         this.props.getBasketballStat();
// //       })
// //       .catch(error => {
// //         console.log("BasketballStat handleSubmit error", error);
// //       });
// //     console.log(this.state)
// //     event.preventDefault();
// //   }

// //   render() {
// //     return (
// //       <div className='formWrapper'>
// //         <form onSubmit={this.handleSubmit} className="form">
// //           <input
// //             className='date'
// //             type="text"
// //             name="date_of_game"
// //             placeholder="Date"
// //             onChange={this.handleChange}
// //           />
// //           <input
// //             type="text"
// //             name="minutes"
// //             placeholder="Minutes"
// //             onChange={this.handleChange}
// //           />
// //           <input
// //             type="text"
// //             name="points"
// //             placeholder="Points"
// //             onChange={this.handleChange}
// //           />
// //           <input
// //             type="text"
// //             name="assists"
// //             placeholder="Assists"
// //             onChange={this.handleChange}
// //           />
// //           <input
// //             type="text"
// //             name="rebounds"
// //             placeholder="Rebounds"
// //             onChange={this.handleChange}
// //           />
// //           <input
// //             type="text"
// //             name="steals"
// //             placeholder="Steals"
// //             onChange={this.handleChange}
// //           />
// //           <input
// //             type="text"
// //             name="blocks"
// //             placeholder="Blocks"
// //             onChange={this.handleChange}
// //           />
// //           <input
// //             type="text"
// //             name="fouls"
// //             placeholder="Fouls"
// //             onChange={this.handleChange}
// //           />
// //           <input
// //             type="text"
// //             name="turn_overs"
// //             placeholder="Turn Overs"
// //             onChange={this.handleChange}
// //           />
// //           <button className="btn" type="submit">Save</button>
// //         </form>
// //       </div>
// //     );
// //   }
// // };


