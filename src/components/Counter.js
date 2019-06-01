import React from "react";
import PropsTypes from "prop-types";

export const Counter = ({ id, score, changeScore }) => (
  <div className="counter">
    <button
      className="counter-action decrement"
      onClick={() => changeScore(id, -1)}
    >
      {" "}
      -{" "}
    </button>
    <span className="counter-score">{score}</span>
    <button
      className="counter-action increment"
      onClick={() => changeScore(id, 1)}
    >
      {" "}
      +{" "}
    </button>
  </div>
);

// 타입은 런타임과 관련이 되어 있음
// 컴파일 상에서 오류를 다 걸러내줌.
// 런타임에서 발생할 수  있는 에러를 걸러내기 위해서 타입체크를  사용하는 것임.
// 배포 상에서는 영향을 주지 않음.
Counter.propTypes = {
  changeScore: PropsTypes.func,
  id: PropsTypes.number,
  score: PropsTypes.number
};

/*
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
}*/
