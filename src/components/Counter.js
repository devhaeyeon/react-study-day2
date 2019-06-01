import React from "react";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    // 1) this.incrementScore = this.incrementScore.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={() => this.props.changeScore(this.props.id, -1)}
        >
          {" "}
          -{" "}
        </button>
        <span className="counter-score">{this.props.score}</span>
        <button
          className="counter-action increment"
          onClick={() => this.props.changeScore(this.props.id, 1)}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}