/*const id = 'hy11111';
const title = 'wewe';
const desc = (
  <p className='main-desc'>
    desc
  </p>
);



const header = (
<header>
  <h1 id={id} title={title}>
  hi
  </h1>
  {desc}
</header>
);*/

const players = [
  { name: "meme", score: 10, id: 1 },
  { name: "meu", score: 20, id: 2 },
  { name: "meumeu", score: 50, id: 3 },
  { name: "mimi", score: 90, id: 4 }
];

const Header = props => {
  // destruct assignment
  // 할당 해체 문법
  //  const {title, totalPlayers,aaa} = props; // 없는 경우일 때는  undefined가 뜸.
  const { title, totalPlayers } = props;
  return (
    <header>
      <h1>{title}</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
};

// 실행함
const Player = props => (
  <div className="player">
    <span className="player-name">
      <button
        className="remove-player"
        onClick={() => props.removePlayer(props.id)}
      >
        x
      </button>
    </span>
    <span className="player-name">{props.name}</span>
    <Counter />
  </div>
);

class Counter extends React.Component {
  //state : 속성, 자기 자신이 속하는 속성.
  state = {
    score: 0,
    a: 3
  };

  constructor(props) {
    super(props);
    // this.incrementScore=this.incrementScore.bind(this)
  }

  incrementScore = () => {
    console.log(this); //why this가 제대로 안찍혀지나.
    //1. state 를 변경하는 방법
    // 안됨 this.state.score=1;
    this.setState({
      score: this.state.score + 1
    });

    // 2. merge -  스코어만 셋스테이트, a 는 안되나 ? 기존 a는 ? > 머지. > 기존 속성 그대로 > 넘겨준 것만 머지됨.  : 기준 속성은 그대로 유지 (오버라이딩 - 리액트튜토리얼엔 머지)
    // 3. 비동기로 처리 > 큐에 넣어서 나중에 처리 . 현재 스테이트 0. 나중처리 > 바로 직전 상태. 직전 상태 가지고 와서 처리.

    this.setState(prevState => ({
      // 함수의 본체로 우선 처리. json객체를 넘기려고함... {}는 함수 본문으로 인식하므로 양쪽 끝에 괄호를 넣어줘야함. ()빼면 함수 본문으로 인식함.
      score: prevState.score + 1
    }));
  }; // incrementScore 클래스의 속성은..익명함수...렉시컬  this

  changeScore = delta => {
    console.log(this); //why this가 제대로 안찍혀지나.
    //1. state 를 변경하는 방법
    // 안됨 this.state.score=1;
    this.setState({
      score: this.state.score + delta
    });

    // 2. merge -  스코어만 셋스테이트, a 는 안되나 ? 기존 a는 ? > 머지. > 기존 속성 그대로 > 넘겨준 것만 머지됨.  : 기준 속성은 그대로 유지 (오버라이딩 - 리액트튜토리얼엔 머지)
    // 3. 비동기로 처리 > 큐에 넣어서 나중에 처리 . 현재 스테이트 0. 나중처리 > 바로 직전 상태. 직전 상태 가지고 와서 처리.

    this.setState(prevState => ({
      // 함수의 본체로 우선 처리. json객체를 넘기려고함... {}는 함수 본문으로 인식하므로 양쪽 끝에 괄호를 넣어줘야함. ()빼면 함수 본문으로 인식함.
      score: prevState.score + delta
    }));
  }; // incrementScore 클래스의 속성은..익명함수...렉시컬  this

  // 속성 - 접근 제어자.퍼블릭., 달러 추가.

  // 이전
  /*constructor(props) {
    super(props);
    this.state={
      score:0
    }
  }*/
  // 생성자는 자신이 갖고 있는 것 초기값
  // 부모. 컴포넌트. 부모가 갖고 있는 속성, 행위 . 부모가 갖고 있는 것을 초기화. 초기화가 안되었기 때문에 초기화.
  // 부모의 생성자를 호출 해주는 방법이 슈퍼. 슈퍼는 컴포넌트. 프롭스 넘겨주고 부모로 부터 받았으면 초기화 하기 위해서 .

  // JSX 메서드 컴포넌트는 렌더 가지고 있음.
  render() {
    // 오버로딩 , new 키워드로 this를 생성함.
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={() => this.changeScore(-1)}
        >
          {" "}
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={() => this.changeScore(+1)}
        >
          {" "}
          +
        </button>
      </div>
      // 온클릭 추상화를 함. - 브라우져별 다른 것을 공통화 시킨다.
      // onClick={this.incrementScore() 이렇게 하면 명령어가 되어버림. 함수 정의만. 현재 명령어를 나열 하는게 아니라 함수만 정의 .
    );
  }
}

// 뉴. 프롭스는 속성으로 가짐. 자기 자신이 속해 있는 값.

class App extends React.Component {
  state = {
    players: [
      { name: "meme", id: 1 },
      { name: "meu", id: 2 },
      { name: "meumeu", id: 3 },
      { name: "mimi", id: 4 }
    ]
  };
  //1)삭제 콜백펑션 정의
  handleRemovePlayer = id => {
    console.log(id); // 로직 - 프로토 - 순서대로 상세히 .
    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
      // filter -> test -> predicate . 판별한다.
    }));
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Score board" totalPlayers={11} />
        {this.state.players.map(player => (
          <Player
            name={player.name}
            key={player.id}
            id={player.id}
            removePlayer={this.handleRemovePlayer} //속성으로 넘겨줌.
          />
        ))}
      </div>
    );
  }
}
// 루트에 삭제 로직 만들고
// 자식에게 내려주고, 자식이 호출.
// 스테이트를 가지고 있는 앱컴포넌트에 콜백펑션을 정의. 콜백펑션을 자식에게 내려주고, 자식은 호출하게 되면 삭제.

ReactDOM.render(<App />, document.getElementById("root"));
