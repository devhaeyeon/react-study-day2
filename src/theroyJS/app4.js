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

const App = props => (
  <div className="scoreboard">
    <Header title="My Score board" totalPlayers={11} />
    {props.initialPlayers.map(player => (
      <Player name={player.name} score={player.score} key={player.id} />
    ))}
  </div>
);

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);
