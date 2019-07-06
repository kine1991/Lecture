## Closures and Prototypal Inheritance

![Alt text](./images/obj-func-arr.png?raw=true "Title")


```bash
    const four = new Function('num', 'return num');
    four(4)
```

```bash
    function woo(){
        console.log('woo');
    }

    woo.yell = 'aaa';

    # // под капотом 
    const specialObj = {
        yell: 'aaa',
        name: 'woo',
        (): console.log('woo')
    }
```

function(){}   have call(), bind(), apply()

## Function - first class citizens
```bash
#1) 
var stuff = function(){}
#2) 
function a(fn){
    fn()
}
a(function(){console.log('hi there')})
#3)
function b(){
    return function c() {console.log('bye')}
}
var d = b();
d() #//=> 'bye'
```

## High order function

High order function функфия которая принимает другую функцию или функция которая возвращает другую функцию

```bash
const giveAccessTo = (name) => 'Access Granted to ' + name;

function authenticate(person) {
  let array = [];
  #// you can add checks here for person.level
  for (let i = 0; i < 50000; i++) {
    array.push(i)
  }
  return giveAccessTo(person.name)
}

function letPerson(person, fn) { #// ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
  if (person.level === 'admin') {
    return fn(person)
  } else if (person.level === 'user') {
    return fn(person)
  }
}

function sing(person) {
  return 'la la la my name is ' + person.name
}

letPerson({level: 'user', name: 'Tim'}, sing)
```


## упражнение 
```bash
const multiplyBy = (num1) => {
  return function (num2) {
    return num1 * num2;
  }
}

#// const multiplyBy = (num1) => (num2) => num1 * num2;

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4)
```
## closure

closure consist of HOF + lexical scope

```bash
function a() {
    let grandpa = 'grandpa'
    return function b() {
      let father = 'father'
      return function c() {
        let son = 'son'
        return `${grandpa} > ${father} > ${son}`
      }
    }
  }
  
  a()()()

  #// функция с ищет grandpa, father не найдя ищет их в замыкании, но не в глобальном пространстве
```


![Alt text](./images/closure.png?raw=true "Title")

```bash
  #//closures and higher order function
  function boo(string) {
    return function(name) {
      return function(name2) {
        console.log(`hi ${name2}`)
      }
    }
  }
  
  const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`)
  
  boo('hi')('john')('tanya');
  
  #// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
  booString = boo2('sing');
  booStringName = booString('John');
  booStringNameName2 = booStringName('tanya')
  
```


## упражнение

* эффективное распределение памяти

```bash
  function callMeMaybe() {
      setTimeout(function() {
          console.log(callMe); #// => 'Hi!' будет читаться так как используется замыкание
      }, 4000);
      const callMe = 'Hi!';

  }

  callMeMaybe();
  ```


  ## Closures and Encapsulation

  ```bash
  function heavyDuty(item) {
    const bigArray = new Array(7000).fill('😄')
    console.log('created!');
    return bigArray[item]
  }
  // при каждома запуске функции,  const bigArray = new Array(7000).fill('😄') создается потом удаляеться

  heavyDuty(699) // => 'created!'
  heavyDuty(699) // => 'created!'
  heavyDuty(699) // => 'created!'



  function heavyDuty2() {
    const bigArray = new Array(7000).fill('😄')
    console.log('created Again!')
    return function(item) {
      return bigArray[item]
    }
  }

  // в данном случае функция heavyDuty2() замыкает на себя const bigArray = new Array(7000).fill('😄') 
  // эффективно распределяеться память
  const getHeavyDuty = heavyDuty2();
  getHeavyDuty(699)
  getHeavyDuty(699)
  getHeavyDuty(699)  // => 'created Again!'
```

* Инкапсуляция

```bash
  const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
      timeWithoutDestruction = -1;
      return '💥';
    }

    setInterval(passTime, 1000);
    return {totalPeaceTime, launch}
  }

  const ww3 = makeNuclearButton();
  ww3.totalPeaceTime()
```

## упражнение
```bash
# // функцию можно вызвать только один раз
let view;
function initialize() {
  let called = 0;
  return function() {
    if (called > 0) {
      return
    } else {
      view = '🏔';
      called = true;
      console.log('view has been set!')
    }
  }
}

const start = initialize();
start();
start();
start();
console.log(view)
```


## упражнение
```bash
const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log('I am at index ' + i)
  }, 3000)
}  
#// I am at index 4 => I am at index 4 => I am at index 4 => I am at index 4

# Решение
#1) let i - block scope
const array = [1,2,3,4];
for(let i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log('I am at index ' + array[i])
  }, 3000)
}

#2)
const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  (function(closureI) {
    setTimeout(function(){
      console.log('I am at index ' + array[closureI])
    }, 3000)
  })(i)
}
```