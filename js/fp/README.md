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