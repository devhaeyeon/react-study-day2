const res = (a, b) => a + b;
// 두 가지 파라미터 넣어서 리턴 받는 형태
console.log(res(1, 2));

const res2 = a => b => a + b;
console.log(res2(1, 2)); // 커링 함수

// arrow > a 를 넣었더니 arrow가 리턴되어서 한번 더 넣으면 괄호를 더 넣어줘야함.
console.log(res(1)(2));

const res3 = a => b => c => a + b + c;
console.log(res(1)(2)(3));
