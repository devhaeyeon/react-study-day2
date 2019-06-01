let book = { title: "인사이드 자바스크립트", price: 18000 };
// 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
/*let copyBook = book;
copyBook.price = 20000;
console.log(book);
console.log(copyBook);*/

/*

컴퓨터는 메모리가 있고 그 메모리는 번지수, 주소를 가지고 있다.
번지수가 정해져있고, 값을 타입에 따라서 몇바이트를 할당할 것인지 정해져 있다.
ram.

var a = 1;
1이라는 값이 메모리의 비어있는 공간에 1이 . 00001. 
a는 번지수를 가르킴.
a는 10번지를 찾아가니 값을 찾아가서 1이다. 
값이 들어간건 프리미티브 타입.

객체는 레퍼런스 타입

let book=[];
title, price

객체는 데이터를 당을 수 있는 공간이고 얼만큼 담을 지 알수 없다. 커질수도 작을 수도. 정해진 게 아님.

메모리 공간에 타이틀을 기록, 메모리와 연속된 공간에 10000이라는 공간을 담고 이어져있다. 20번지라면
이 북은 20을 가르키는 게 아니라 메모리 공간에 20번지를 기록한다. 30번지라면 book은 30번지를 가르킴.
20번지를 찾아가니 값이 담겨 있다.
객체는 값이 담겨 있는 메모리 주소를 가지고 있다. 그래서 레퍼런스 타입이라한다.
price 접근하려면 book. 점이 레러런스 연산자다. 

연속된 메모리 공간에 배치가 되어 있으므로 계산이 가능 . 

boo 20 번지.
copyBook 20번지 복사.
같은 메모리 주소를 바라보고 있다.

안에 있는 내용을 다 바꾸려면 딥카피.

*/

// 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.
// 2-1 Object.assign() 사용하여 deep copy하기
// target:새로운 바구니, score: 기존 바구니
var copyBook = Object.assign({}, book);
copyBook.price = 20000;
console.log(book);
console.log(copyBook);

// 2-2 es6 spread 연산자를 사용하여 deep copy 하기
