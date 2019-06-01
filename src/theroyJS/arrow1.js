// 익명 함수 부분을 애로우 펑션으로 전환
// (입력)=>{출력}
// 출력 문장이 한 줄이면 {} 생략 가능
//  and 리턴 생략

/*let circleArea = function(pi, r) {
  let area = pi * r * r;
  return area;
};*/

let circleArea = (pi, r) => pi * r * r;

// 위는 함수 표현식이다. 익명함수 부분을 애로우 펑션으로 바꾸시오

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
