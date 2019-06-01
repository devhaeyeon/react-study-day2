// object destructuring assinment
// 스와핑이 가능함.
//var o = { p: 42, q: true };
//var { p, q } = { p: 42, q: true }; // p,q 변수다., 정확한 키에 매핑이 됨.
//var { q, p, o } = { p: 42, q: true }; //키를 찾아서 들어가기 때문에 스와핑이 됨. 그래서 배열구조 분해와 차이점임.
var { q, p, o = 1 } = { p: 42, q: true }; // 디폴트 파라미터

console.log(p); // 42
console.log(q); // true
console.log(o);
