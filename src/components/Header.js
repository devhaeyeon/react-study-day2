import React from "react";
import { Statistics } from "./Statistics";
import { Stopwatch } from "./Stopwatch";
import PropsTypes from "prop-types";

// 객체에 있는 것이 { title, players } 을 파라미터로 넣음으로써 바로 할당이 됨.
export const Header = ({ title, players }) => {
  //console.log(props);
  // destruct assignment
  //  const { title, players } = props;
  return (
    <header>
      <Statistics players={players} />
      <h1>{title}</h1>
      <Stopwatch />
      {/* <span className="stats">Players: {totalPlayers}</span> */}
    </header>
  );
};

Header.propTypes = {
  title: PropsTypes.string,
  players: PropsTypes.arrayOf(
    PropsTypes.shape({
      name: PropsTypes.string,
      score: PropsTypes.number,
      id: PropsTypes.number
    })
  )
};

Header.defaultProps = {
  title: "Default title"
};
