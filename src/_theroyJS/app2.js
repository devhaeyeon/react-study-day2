// React element
/*
const title = React.createElement(
  'h1',
  {id:'main-title',title:'this is a title'},
  'My first react element'
);// 자바스크립트 객체로 만들어낸다!! 이게 뭐냐 . 왜하냐. 개념 파악에는 반드시 알아야함. 외국은 기초를 중요시 여김.// 리턴되는 것은 자바스크립트 객체다!!


const title = (
  <h1 id='main-title' title='this is a title'>
    My First React Element
  </h1>
);

console.log(title);
console.log("ddhdkdk");


const header = (
<header>
  <h1 id={id} title={title}>
  hi
  </h1>
  <p>
  d
  </p>
</header>)
/*const desc = React.createElement(
  'p',
  null,
  'This is descriptions'
);

const emDesc = React.createElement(
  'strong',
  null,
  'Description'
);

/*const desc = React.createElement(
  'p',
  null,
  'This is the ',emDesc
);

const desc = (
  <p>
    <strong>Description</strong>
  </p>
);


const header = (
  <header>
    <h1 id='main-title' title='this is a title'>
      My First React Element
    </h1>
    <p>
      This is the Description
    </p>
  </header>
); /*

const header = React.createElement(
  'header',
  null,
  title, desc
);


// js expression 제외. 순수 자바스크립트로 작성이 가능함.

ReactDOM.render(header, document.getElementById('root'));

//react-dom : render  함수
// 리액트 엘리먼트에 올려라.
// 파라미터 하나, 두개 .. 오버로딩이 없지만 타입스크립트 > 오버로딩.
// 자바스크립트 객체 (리액트 앨리먼트), 실제 뷰. 자바스크립트 객체를 루트에 올려줌.*/
