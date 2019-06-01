import React from "react";
import { Counter } from "./Counter";
import PropsTypes from "prop-types";
// 해당 부분만 변경이 됨.
// 내부적으로 업데이트 사이클 그런 것을 내부적으로 가지고 있기 때문에.
// shallow comparison 밖에서 .
// shallow comparison 값을 비교. 안에 있는 것이 바뀐지 모르기 때문에 딥카피 필요.
export class Player extends React.Component {
  // isRequired 필수값. static 변수와 같음
  static propsTypes = {
    removePlayer: PropsTypes.func,
    id: PropsTypes.number,
    score: PropsTypes.number,
    name: PropsTypes.string.isRequired,
    changeScore: PropsTypes.func
  };
  render() {
    const { id, name, score, changeScore, removePlayer } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            x
          </button>
        </span>
        <span className="player-name">{name}</span>
        <Counter score={score} id={id} changeScore={changeScore} />
      </div>
    );
  }
  // undefined를 리턴함.
  componentWillReceiveProps(nextProps, nextContent) {
    console.log(nextProps);
  }
  //  true/false값을 명시적으로 리턴함.
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextProps);
    // 변경될 props를 비교하영 true or false 리턴
    return nextProps.score !== this.props.score;
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
