//curried function
//할인율을 받고 그다음에 가격을 받는 합성함수
//const getDiscount = (price, rate) => price * rate;
//애로우펑션에서 파라미터 다음에 함수 선언부가 나타남
//합성함수의 경우 함수 선언부 부분에 다음에 받는 파라미터가 등장
//내부적으로 접근할수 있는 함수를 선언함(closure선언)

// 할인율은 고정이지만 가격에따라 다른 혜택을 주는 함수만들기
//dd
const getDiscount = rate => price => rate * price;

const getTenPercentOff = getDiscount(0.1);

console.log(getTenPercentOff(10000));

//여기서 price는 함수가 선언되었다고 봄.
//https://babeljs.io/repl 에서 ES5이전버전 코드확인가능

//함수 선언부가 애로우펑션 이후에 오지않고 변수 선언이 되어있다는것은 해당부분이 클로저함수가 호출
//해당하는 파라미터를 받는 내부 클로저

/*
이코드와 같음
"use strict";

var getDiscount = function getDiscount(rate) {
  return function (price) {
    return rate * price;
  };
};

*/
