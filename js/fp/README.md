## FP

* - все функции в функциональном програмировании __чистые__

### Чистые функции
1. Одинаковый вход => Одинаковый выход (сколоко бы раз не вызывали ф-ия получим один и тотже результат)
2. Нет побочных эффектов (ничего не может изменить снаружи себя)
    * - Видоизменение входных параметров
    * - console.log
    * - HTTP вызовы (AJAX/fetch)
    * - Изменение в файловой системе
    * - Запросы DOM




```bash
    #//Side effects:
    const array = [1,2,3];
    function mutateArray(arr) {
        arr.pop()
    }

    function mutateArray2(arr) {
        arr.forEach(item => arr.push(1))
    }
    #//The order of the function calls will matter.
    mutateArray(array)
    mutateArray2(array)
    array
```

```bash
    #//No Side effects:
    const array = [1,2,3];
    function removeLastItem(arr) {
        const newArray = [].concat(arr);
        newArray.pop();
        return newArray;
    }

    function mutateBy2(arr) {
        const newArray = [].concat(arr);
        return newArray.map(item => item * 2);
    }
    removeLastItem(array); #// => [1,2]
    mutateBy2(array); #// => [2,4,6]
    array; #// => [1,2,3]
```

```bash
    #//side effect
    function a(){
        console.log('hi')
    }
    a()
```

```bash
    #//side effect
    function a(){
        console.log('hi')
    }
    a()
```


```bash
    const add = (x, y) => x + y;
    add(2, 4); #// 6
```

* - идея __чистых футкций__, сделать легко тесты, избежать багов


![Alt text](./image/pure-function1.png?raw=true "Title")


### Idempotent

```bash
    #// Idempotence: функция возвращает, что мы ожидаем.
    function notGood() {
    return Math.random()
    #// new Date();
    }
    notGood()

    function good() {
    return 5
    }
    Math.abs(Math.abs(10))
```

## Imperative vs declarative

* Imperative - говорит машине что делать и как делать (компьютер)
```bash
    for(let i = 1; i < 1000; i++){
        console.log(i)
    }
```
* declarative - говорит машине что делать и что должно получиться (человек)
```bash
    [1,2,3].forEach(item => console.log(item))
```

##Immutibility
```bash
    const obj = {name: 'Andrei'}
    function clone(obj) {
        return {...obj}; #// this is pure
    }

    function updateName(obj) {
        const obj2 = clone(obj);
        obj2.name = 'Nana'
        return obj2
    }

    const updatedObj = updateName(obj)
    console.log(obj, updatedObj)
```

## Higher Order Functions and Closures
```bash
    #//HOF
    const hof = (fn) => fn(5);
    hof(function a(x){ return x})
    #//Closure
    const closure = function() {
        let count = 55;
        return function getCounter() {
            return count++; #// getCounter меняет состояние другой функции closure
        }
    }

    const getCounter = closure()
    getCounter()
    getCounter()
    getCounter()
```

##currying
```bash
    #//Currying
    const multiply = (a, b) => a * b
    const curriedMultiply = (a) => (b) => a * b  #//Currying function
    curriedMultiply(5)(20)
    const multiplyBy5 = curriedMultiply(5)
    multiplyBy5(20)
```


##Partial Application
```bash
    const multiply = (a, b, c) => a * b * c
    const partialMultiplyBy5 = multiply.bind(null, 5)
    partialMultiplyBy5(10, 20)
```

## Memoization

```bash
#// memoizeAddTo80(n) вызвать больше одного раза то кэшируеться и т.о. можно получить доступ быстрый доступ к cache[n] . И не проводить более сложного вычисления n + 80
function memoizeAddTo80(n) {
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  };
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6));
#// console.log(cache)
#// console.log('-----------')
console.log(2, memoized(6));

```

## Compose and Pipe

```bash
    #// var compose = function(f,g){
    #//   return function(data){
    #//     return f(g(data))
    #//   }
    #// }

    const compose = (f, g) => (data) => f(g(data))
    const func = compose((num) => num+5, (num) => num*5)

    console.log(compose((num) => num+5, (num) => num*5)) #// => (data) => f(g(data))
    console.log(func(5)) #// => 30
    console.log(((num) => num*5)(4)) #// => 30
```

```bash
    fn1(fn2(fn3(50)));

    compose(fn1, fn2, fn3)(50) //Right to lext
    pipe(fn3, fn2, fn1)(50)//left to right

    const compose = (f, g) => (a) => f(g(a))
    const pipe = (f, g) => (a) => g(f(a))
    const multiplyBy3AndAbsolute = compose((num) => num*3, Math.abs)
    console.log(multiplyBy3AndAbsolute(-50))
```

## execise Amazon shop

```bash
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: []
};

const compose = (f, g) => (...args) => f(g(...args));
const purchaseItem = (...fns) => fns.reduce(compose);

purchaseItem(emptyUserCart, buyItem, applyTaxToItems, addItemToCart)(user, {
  name: "laptop",
  price: 200
});

function addItemToCart(user, item) {
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}
function applyTaxToItems(user) {
  const { cart } = user;
  const taxRate = 1.3;
  const updateCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate
    };
  });
  return Object.assign({}, user, { cart: updateCart });
}

function buyItem(user) {
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyUserCart(user) {
  return Object.assign({}, user, { cart: [] });
}

```



## map

```bash
const meals = [
    {id: 1, description: 'xxx', name: 'X'},
    {id: 2, description: 'zzz', name: 'Z'}
]

const upadateMeal = meals.map(meal => {
    if(meal.id == 1){
      return {
        ...meal,
        description: 'UUU',
        phone: 333
      }
    }
    return meal
})

console.log(upadateMeal) #// => [ { id: 1, description: 'UUU', name: 'X', phone: 333 },
  { id: 2, description: 'zzz', name: 'Z' } ]

```

```bash
    #// 1. create a constant named friends, which is an array that contains 2 names of your choosing.
    const friends = ['Nate', 'Michael'];

    #// 2. Create a new constant named updatedFriends, which includes the friends array values plus one additional name
    const updatedFriends = [...friends, 'Dustin'];

    #// 3. Create a new constant named friendNameLengths, which is based on the array updatedFriends, but instead of having the friends names, have the array store the length of each persons name.
    const friendNameLengths = updatedFriends.map(friend => {
    return friend.length;
    })

    const shorterNamedFriends = updatedFriends.filter(friend => {
    return friend.length < 7
    })
```

## reduce

```bash
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    #// 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer));
    #// expected output: 10

    #// 5 + 1 + 2 + 3 + 4
    console.log(array1.reduce(reducer, 5));
    #// expected output: 15
```
```bash
const array3 = [1, 20, 23, 84];
array3.reduce((acc, cur) => {
  console.log(acc, cur)  // 1) 1 20 2) 21 23 3) 44 84
  return acc + cur #// => 128
})
```

## curring
```bash
    function greet(greeting) {#//, name) {
        return function(name) {
            return `${greeting} ${name}`;
        };
    }

    console.log(greet('Good Morning')('James')); #// Good Morning James

    const friends = ['Nate', 'Jim', 'Scott', 'Dean'];

    #// const friendGreetings = friends.map(greet('Good Morning'));
    const friendGreetings = friends.map((friend) => greet('Good Morning')(friend));

    console.log(friendGreetings); #// [ 'Good Morning Nate', 'Good Morning Jim', 'Good Morning Scott', 'Good Morning Dean' ]
```

* - hight order function - принимает функцию как параметр и возвращает функцию


## exesice

```bash
    #// Functional Programming for Beginners Excercise

    #// create transforms to go from studentGrades, to studentFeedback

    #/*
    studentFeedback === [
        'Nice Job Joe, you got an b', 
        'Excellent Job Jen, you got an a', 
        'Well done Steph, you got an c', 
        'What happened Allen, you got an d', 
        'Not good Gina, you got an f'
    ]
    #*/

    const studentGrades = [ 
        {name: 'Joe', grade: 88},
        {name: 'Jen', grade: 94},
        {name: 'Steph', grade: 77},
        {name: 'Allen', grade: 60},
        {name: 'Gina', grade: 54}, 
    ];

    const messages = {
        a: 'Excellent Job',
        b: 'Nice Job',
        c: 'Well done',
        d: 'What happened',
        f: 'Not good',
    };

    function letterGrade(points){
        if(points >= 90){
            return 'a';
        } else if (points >= 80){
            return 'b'; 
        } else if (points >= 70){
            return 'c'; 
        } else if (points >= 60){
            return 'd'; 
        } else {
            return 'f'; 
        }
    }

    function feedBack(feedBackRules){
        return function(student){
            const grade = letterGrade(student.grade);
            const message = feedBackRules[grade];
            return `${message} ${student.name}, you got an ${grade}`;
        }
    }

    const gradeFeedback = studentGrades.map(studentGrade => feedBack(messages)(studentGrade));
    #// const gradeFeedback = studentGrades.map(feedBack(messages));
    console.log(gradeFeedback);


```

![Alt text](./image/impure_func.png?raw=true "Title")


```bash
    const sentence = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate ex quidem quaerat at facere repellat repellendus, et perferendis tenetur cupiditate deleniti labore maiores tempore eius, sit placeat est? Earum.';

    const wordList = R.split(' ', sentence);

    console.log(wordList);

    const wordCount = R.length(R.split(' ', sentence));

    console.log(wordCount);

    const countWords = R.compose(R.length ,R.split);

    console.log(countWords(' ', sentence));

    const countWords2 = R.compose(R.length ,R.split(' '));

    console.log(countWords2(sentence));

    const countWords3 = R.pipe(R.split(' '), R.length);

    console.log(countWords3(sentence));

    const multiplyBy2 = (data) => data*2
    const Plus5 = (data) => data + 5
    const calculate = R.pipe(Plus5 ,multiplyBy2);
    console.log(calculate(3));
```

##execise
```bash
    #// Count how many digits there are in the following 
    #// sentence, using functional composition
    const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

    const numbersInString = R.pipe(
        R.split(''),
        R.map(parseInt),
        R.filter(Number.isInteger),
        R.length,
    );

    console.log(numbersInString(sentence))
```

