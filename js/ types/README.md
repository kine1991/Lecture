## TYPES

# type in js

```bash
    # // Primitive have value
    typeof 5  =>  number
    typeof 'xxx'  =>  string
    typeof true  =>  boolean
    typeof undefined  =>  undefined # // absense definition
    typeof null  =>  object  # // ошибка языка
    typeof Symbol('ooo') => symbol

    # // non-primitives have reference
    typeof {}  =>  object
    typeof []  =>  object
    typeof finction(){}  =>  function

     # // undefined - absense definition, null - absense value
```

```bash
    function a(){
        return 5;
    }
    a.hi = ' hihihih

    console.log(a.hi)
```

```bash
    Array.isArray([1,2,3]) => true
    Array.isArray({}) => false
```

## Pass by reference vs by value

![Alt text](./images/pass-by-reference-vs-by-value.png?raw=true "Title")

```bash
var a = 5;
var b = a;
b++;

console.log(a) #// => 5;
console.log(b) #// => 6;

```


```bash
let obj1 = {name: 'xy', age = 30};
let obj2 = obj1;
obj2.age = 99;

console.log(obj1) #// => {name: 'xy', age = 99};
console.log(obj2) #// => {name: 'xy', age = 99};
```

```bash
let c = [1,2,3];
let d = c;
d.push( 4 );

console.log(c);   #// [1,2,3,4]
console.log(d);   #// [1,2,3,4]
```

Клонирование

```bash
let c = [1,2,3];
let d = [].concat(c); # // клонирование массива
d.push( 4 );

console.log(c);   #// [1,2,3]
console.log(d);   #// [1,2,3,4]
```

```bash
let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}

obj.c = 5;
console.log(clone) #// {a: 'a', b: 'b', c: 'c'}
```


```bash
let obj = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(obj) #// => { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(clone) #// => { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(clone2) #// => { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(superClone) #// => { a: 'a', b: 'b', c: { deep: 'try and copy me' } }
```


# type coercion

```bash
    1 == '1' #//true



    if(1){
        
    }
```

![Alt text](./images/coercion.png?raw=true "Title")

![Alt text](./images/coercion2.png?raw=true "Title")
![Alt text](./images/coercion3.png?raw=true "Title")

# Dynamic vs Static Typing

![Alt text](./images/dynamic-vs-static.png?raw=true "Title")


Нет строгой типизации

```bash
    var a = 'zzz'
    a + 17  #// => a17
```