import React from "react";
import Header from "./components/Header";
import { Player } from "./components/Player";
import { AddPlayerForm } from "./components/AddPlayerForm";

import "./App.css";

class App extends React.Component {
  state = {
    players: [
      { name: "LDK", score: 0, id: 1 },
      { name: "HONG", score: 0, id: 2 },
      { name: "KIM", score: 0, id: 3 },
      { name: "PARK", score: 0, id: 4 }
    ]
  };
  maxID = 4;
  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = id => {
    console.log(id);

    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }));
  };

  handleChangeScore = (id, delta) => {
    console.log(id, delta);

    this.setState(prevState => {
      this.state.players.forEach(item => {
        if (item.id === id) {
          item.score += delta;
        }
      });
      return {
        players: [...prevState.players] // 배열이면 배열을, 객체면 객체를..
      };
    });
  };

  handleAddPlayer = name => {
    console.log(name);
    this.setState(prevState => ({
      players: [...prevState.players, { name, score: 0, id: ++this.maxId }]
    }));
  };

  /*handleAddPlayer = name => {
    this.setState(prevState => ({
      players: [...prevState.players, { name, score: 0, id: ++this.maxID }]
    }));
    this.setState(prevState => ({
      players: [
        ...prevState.players,
        {
          name,
          score: 0,
          id: ++this.maxID
        }
      ];
    }));
  };*/

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players} />

        {this.state.players.map(player => (
          <Player
            name={player.name}
            score={player.score}
            key={player.id}
            id={player.id}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleChangeScore}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
