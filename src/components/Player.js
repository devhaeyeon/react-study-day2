import React from "react";
import Counter from "./Counter";
// 해당 부분만 변경이 됨.
export class Player extends React.PureComponent {
  render() {
    console.log(this.props.name, "rendered");
    return (
      <div className="player">
        <span className="player-name">
          <button
            className="remove-player"
            onClick={() => this.props.removePlayer(this.props.id)}
          >
            x
          </button>
        </span>
        <span className="player-name">{this.props.name}</span>
        <Counter
          score={this.props.score}
          id={this.props.id}
          changeScore={this.props.changeScore}
        />
      </div>
    );
  }
}

// 함수 컴포넌트는 값이 내려옴.
/*export const Player = props => {
  console.log(this.props.name, "rendered");
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => this.props.removePlayer(this.props.id)}
        >
          x
        </button>
      </span>
      <span className="player-name">{this.props.name}</span>
      <Counter
        score={this.props.score}
        id={this.props.id}
        changeScore={this.props.changeScore}
      />
    </div>
  );
};*/
