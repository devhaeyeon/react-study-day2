//생성자 함수의 this : 자기 자신
function Person() {
  // this = {};
  this.arms = 2;
  this.legs = 2;
}

// 자바스크립트에서 객체를 생성하는 2가지 방법은 무엇인가? 아래는 어떤 방법인가?
// 1) 리터럴 객체 2)  new를 이용한 생성자 함수
// 생성자 함수(객체를 생성하기 위한 목적) 규칙
// 내부적으로 자기자신을 가르키는 this가 생성
// return문이 없거나(primitive타입) 혹은 객체를 리턴하지 않으면 this를 리턴
var person = new Person(); // 생성자 함수로 실행.
// 실행 결과는 무엇인가? 실행결과에 대해서 설명하시오.
console.log(person);
// literal 객체로  person 객체를 생성하시오.

// 실행 결과는 무엇인가? 여기서 사용된 this는 무엇인가?
console.log(arms);
// 만일 this.arms, this.legs가 없다면 new Person()의 결과는 무엇인가?
// 생성자 함수 - 틀 . 인스턴스를 만들기 위한
// new로 부터 인스턴스가 만들어져서 사용할 수 있음.

// 재사용 ui모음. !!!! 컴포넌트. 하나로 만들어서 재사용 !!!!
// 클래스 등장 ! 함수형 언어에서 oop 언어로. 객체지향 언어로.

// 클래스 많은 기능 있지만 많은 리소스를 차지 하고 있기 때문에 함수 컴포넌트를 사용할 수 있으면 함수.
// 함수 둘다 가능. 리액트는 무었을? 내부에 this가 있냐, 없냐가 다름.

// 함수 컴포넌트는 반드시 대문자로 !!리액트는 대문자면 컴포넌트로 인식을함. 소문자면 함수로 인식. function Header () != function header ()

// 인텔리 제이 템플릿!!!!!!
