import React from "react";
export class AddPlayerForm extends React.Component {
  textInput = React.createRef();

  // controled : vaildation할 때 실시간으로 보여w줌. vaildation이 필요 없으면 할 필요없다.
  // uncontroled component.
  // 변경될 때마다 확인 controled component
  // core, dom, bom
  handleSubmit = event => {
    // 기본이벤트 새로고침 막기
    event.preventDefault();
    //event.stopPropagation();
    // event 버블링 막기 .
    if (!this.textInput.current.value) return false;
    // this.textInput.current === document.getElementById('id')
    this.props.addPlayer(this.textInput.current.value);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="enter a player's name"
          ref={this.textInput}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

/*export class AddPlayerForm extends React.Component {
  state = {
    value: ""
  };

  constructor(props) {
    super(props);
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    // 기본 이벤트 (새로고침) 막기
    e.preventDefault();
    // e.stopPropagation(); 이벤트 버블링 막기
    this.props.addPlayer(this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="enter a player's name"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}*/
