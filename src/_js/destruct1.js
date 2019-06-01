// array destruct assignment
var foo = ["one", "two", "three"];
// 배열을 할당, 파괴를 해서 할당을 했다
// 디스트럭트 어싸인 먼트.
// 정확한 키를 가지고 매핑. 어레이는 순서대로 매핑
// 갯수가 달라지면 디폴트 파라미터. function에 파라미터 3개지만 2개 밖에 안오면 3개는 undefined
// 이는 디폴트 파라미터를 사용하면 되는데 디스트럭트 파라미터 + 디스트럭트 어싸인먼트 결합 해서 사용이 가능하다
// var [one, two, three] = ["one", "two", "three"];
//console.log(one); // "one"
//console.log(two); // "two"
//console.log(three); // "three"

//var [one, two, three,four] = ["one", "two", "three"];
//console.log(one); // "one"
//console.log(two); // "two"
//console.log(three); // "three"

/*var [one, two, three,four='four'] = ["one", "two", "three"];
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
console.log(four); // default parameter로 기본값을 지정*/

// 어레이 에서는 값들이 스와핑이 안됨. 값이 차례차례 들어가기 때문임.
// 객체는 키값으로 매핑하기 때문에 스와핑이 가능함.
/*var [two, one, three,four='four'] = ["one", "two", "three"]; 
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
console.log(four); // default parameter로 기본값을 지정*/
var [one, ...two] = ["one", "two", "three"]; // 뒤에 오는 것엔 two에 넣겠다.
console.log(one); // "one"
console.log(two); // "two"
console.log(typeof two); // 뒤에 오는 것을 담아야 하기 때문에 객체이다.
console.log(two); // two
