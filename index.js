/*
alert('Im Working. Im js'); //알림창과 그 하단에 뜨는 메세지

console.log('Im Working. Im js'); //콘솔에 로그로 나타남

const array = ["Hello", "num", 42, true];

console.log(array);

const object = {
  name:"juoh",
  age:24,
  isSmart:true,
  favFood: [
  {
  name:"macaron",
  fatty: true
  },
  {
  name:"sweet potato",
  fatty: false
  }
  ]
  }

console.log(object);

//console은 object이고 log는 함수
console.log(console)

//함수 정의, 인자의 이름과 데이터는 상관없어도 된다.

function sayHello(name, chicken){
  console.log('Hello', name, "나이는", chicken, "yes");
}
sayHello("juoh", 24);


//다른 방식의 표기법 -> 불편함
function sayHello(name, chicken){
  console.log('Hello ' +name+ " 나이는 " +chicken+ " yes");
}
sayHello("juoh", 24);


//백틱을 사용한 표기법 ``
function sayHello2(name, chicken){
  console.log(`Hello ${name} 나이는 ${chicken} yes`);
}
const greet2 = sayHello2("juoh", 24);
console.log(greet2) 
//반환값이 없기 때문에 undefined값이 나타난다.

//반환값 만들어주기, console.log는 객체이다
function sayHello3(name, chicken){
  return(`Hello ${name} 나이는 ${chicken} yes`);
}
const greet3 = sayHello3("juoh", 24);
console.log(greet3) 



//계산기 만들어보기 - 계산기 안에 여러개의 함수를 넣고 싶은 경우 객체 안에 여러개의 함수를 구현한다.
const calculator = {
  plus: function(a, b){
    return (a + b);
  },
  minus: function(a, b){
    return (a - b);
  },
  mul: function(a, b){
    return (a * b);
  },
  div: function(a, b){
    return (a / b);
  },
  mod: function(a, b){
    return (a % b);
  }
}

console.log(calculator.plus(5, 5));

*/
