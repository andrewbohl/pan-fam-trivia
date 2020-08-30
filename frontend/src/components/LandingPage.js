import React, { Component } from "react";
import { WelcomeText, WelcomeForm } from "../styles/LandingStyles";

// enter your name
// enter a chat token or create your room
// click enter and be taken to new room

class TriviaLandingPage extends Component {
  state = {
    name: "",
    gameCode: "",
  };

  handleChange = (e) => {
    const { id, type, value } = e.target;
    console.log(e.target);
    console.log(id);
    this.setState({ [id]: value });
  };

  handleNewGameClick = (e) => {
    console.log("button clicked");
  };

  render() {
    return (
      <div>
        <WelcomeText>Welcome to PanFam Trivia!</WelcomeText>
        <WelcomeForm>
          <fieldset>
            <label htmlFor="name">Display Name
            <input
              className="displayName"
              type="text"
              id="name"
              placeholder="What name do you want to display?"
              value={this.state.name}
              onChange={this.handleChange}
            />
            </label>

            <label htmlFor="name">Enter a game code
            <input
              className="gameCode"
              type="text"
              id="gameCode"
              placeholder="title"
              value={this.state.gameCode}
              onChange={this.handleChange}
            />
            </label>

            <label htmlFor="buttons">
              <button
                disabled={this.state.gameCode === ""}
                onClick={this.handleNewGameClick}
              >
                Join game room
              </button>
              <button onClick={this.handleNewGameClick}>
                Start your own game!
              </button>
            </label>
          </fieldset>
        </WelcomeForm>
      </div>
    );
  }
}
export default TriviaLandingPage;
