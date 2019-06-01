function Animal(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function() {
    console.log(this === myCat);
    console.log("The " + this.type + " has " + this.legs + " legs");
  };
}
// 호출 용도보다 생성자 함수를  쓰겠다.
// 2가지 파라미터.
// myCat 리터럴 객체.

var myCat = new Animal("Cat", 4);
console.log(myCat);
// 리터럴 객체로 Animal 객체를 적으시오.

var myCat = {
  type: "cat",
  legs: 4,
  logInfo: function() {
    console.log(this === myCat);
    console.log("The " + this.type + " has " + this.legs + " legs");
  }
};

// 대량생산 생성자, 간단한 건 리터럴.
// 동적 생성은 생성자 함수 사용, 맞는 파라미터.
// 둘다 같음.
// 자기자신(생성자), 부모(제이슨객체) 나머지는 글로벌 디스. 제이슨에 있는 것 눈에 더 확 들어옴.  저기 안의 디스는 myCat.
// 바로 상위 부모.
// myCat.type , a.b.c.d
// json객체에서 this는 상위 부모를 가르킨다.  a,b,c,d

// 실행결과를 적으시오. function 안에 this는 무엇을 가르키는가?
myCat.logInfo();
console.log(myCat);

// 실행결과를 적으시오. this는 무엇을 가르키는가?
setTimeout(myCat.logInfo, 1000);
//처음부터 다 일고. 비동기 적인 건 큐에넣고 메인쓰레드에서 불러옴. 부모랑 자기를 다 넣는게 아니라 큐만 부모에...
