import React from "react";
import Counter from "./Counter";
// 해당 부분만 변경이 됨.
// 내부적으로 업데이트 사이클 그런 것을 내부적으로 가지고 있기 때문에.
// shallow comparison 밖에서 .
// shallow comparison 값을 비교. 안에 있는 것이 바뀐지 모르기 때문에 딥카피 필요.
/*export class Player extends React.PureComponent {
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
}*/

// 함수 컴포넌트는 값이 내려옴.
// 속성이 변할 것이다라는 것을 알려주는 라이프사이클.
// component .. 리턴이 void
// should true/false
// 리턴문이 없더라도 undefined가 리턴.
// should에서는 명시적으로 true/false를 리턴해줘야함!
export const Player = props => {
  console.log(props.name, "rendered");
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(this.props.id)}
        >
          x
        </button>
      </span>
      <span className="player-name">{props.name}</span>
      <Counter
        score={props.score}
        id={props.id}
        changeScore={props.changeScore}
      />
    </div>
  );
};
