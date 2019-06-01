// Student 라는 이름의 클래스를 생성하시오.
class Student {
  // 붕어빵
  // name; 클래스 바로 밑은 변수 . 클래스 바로 밑에오고 속성이다.
  // name; // 단팥, 밀가루 , 있어도 되고 없어도 되고 . this 2번. new 호출하면 내부적으로 디스 생기고, 그 안의 것이 속성이 됨.
  constructor(name) {
    // 파라미터 name은 로컬 변수
    // 속성을 초기화
    this.name = name;
  }
  changeName(userName) {
    //메서드는 로직을 수행하는 역할.
    this.name = userName;
  }

  // 메서드 데피니션
  /*
    changeName(){}

   */
}

const user1 = new Student("Jane"); // ()는 생성자를 호출한다. 오버로딩이 없기 때문에 생성자는 딱하나뿐. 파라미터를 넘겨주든 안넘겨주든 받음.
console.log(user1);
user1.changeName("Tom");
console.log(user1);

// 생성자를 추가하시오. new Student() > 생성자를 호출하라.
// 붕어빵 - 밀가루, 단팥. 초기 값 셋팅. 초기값을 설정. 생성자에서 속성값을 초기화 해주는게 생성자. 뉴 스튜던트 괄호가 생성자에 해당함.

// 생성자에 name 파라메터를 받아서 name 속성에 할당하는 코드를 쓰시오

// "Jane" 이라는 이름을 파라메터로 넘겨서 user1 변수명을 가진 인스턴스를 생성하시오

// changeName이라는 이름의 메서드를 추가하시오.
// 이 메서드는 userName이라는 파라메터를 받아서 name 속성을 userName 값으로 업데이트해야한다.

// user1 인스턴스의 name 이 "Tom" 이 되도록 함수를 호출해서 변경해보자.
// 값이 바뀌었는지 출력해서 확인해보자

// 생성자의 역할은 무엇인가?
//  속성을 초기화 . 뉴 스튜던트 괄호 > 생성자를 호출하는 것.
// 생성자에 사용된 this는 무엇을 가르키는가? > 자기 자신.
