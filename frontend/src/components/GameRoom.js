import React, { Component, useState } from "react";
import Leaderboard from "./Leaderboard";
import EasyButton from "./PracticeButton";
import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:3000";

//   const [state, setState] = useState({ title: "", description: "" });
// const [loading, setLoading] = useState(false);
// const socket = socketIOClient(ENDPOINT);

class GameRoom extends Component {
  state = {
    users: [{'name':'A', 'score':200}, {'name':'B', 'score':300}, {'name':'C', 'score':250}],
  }
  socket = socketIOClient(ENDPOINT);

  render() {
    return (
      <div class="row">
        Welcome to the game!
        <div class="col-md-4" style={{float: 'left 25%',}}>
          <Leaderboard users={this.state.users}/>
        </div>
        <div class="col-md-8" style={{float: 'right 75%',}}>
          <EasyButton />
        </div>
      </div>
    );
  }
}

export default GameRoom;
