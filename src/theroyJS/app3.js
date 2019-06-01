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

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

const Player = props => (
  <div className="player">
    <span className="player-name">{props.name}</span>
    <Counter score={props.score} />
  </div>
);

const Counter = props => (
  <div className="counter">
    <button className="counter-action decrement"> -</button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action increment"> +</button>
  </div>
);

const App = () => (
  <div className="scoreboard">
    <Header title="My Score board" totalPlayers={11} />
    <Player name="meme" score={60} />
    <Player name="meu" score={70} />
    <Player name="meumeu" score={80} />
    <Player name="mimi" score={10} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
