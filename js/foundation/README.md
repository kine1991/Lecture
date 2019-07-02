## FONDATION

# Execution context

![Alt text](./image/code-execution-context.png?raw=true "Title")

![Alt text](./image/global-execution-context2.png?raw=true "Title")


* Когда код запущен в js-engine  global execution context создан, когда запускаем функцию добавляеться новый execution context


# Lexical enviroment 

* Lexical enviroment - где код написан


![Alt text](./image/code-lexical-enviroment.png?raw=true "Title")

функция a() - лексически в findName окружении

<strong>lexical scope</strong> - где функция была определена. Все в js lexical scope, кроме <strong>this</strong>

<strong>dinamic scope</strong> - где функция была вызвана. В js это   <strong>this</strong>

Определение : 

![Alt text](./image/lexical-dinamic-scope-determination.png "Title")

```bash
    function(){} - dinamic scope
    () => {} - lexical scope
```

# Hoisting
```bash
    console.log(teddy);    // => undefined
    console.log(sing());   // => 'sing'
    var teddy = 'bear';
    function sing(){
        console.log('sing');
    }
```

процесс под капотом можно изобразить так:
```bash
    var teddy = undefined;
    function sing(){
        console.log('sing');
    }
    console.log(teddy);    // => undefined
    console.log(sing());   // => 'sing'
    var teddy = 'bear';
```

```bash
    console.log(teddy);    // => undefined
    console.log(sing2());   // => error
    console.log(sing2);   // => undefined
    var teddy = 'bear';

    # // function expression
    var sing2 = function(){
        console.log('sing2');
    }
    # // function declaration
    function sing(){
        console.log('sing');
    }
```

### упражнение 1
```bash
    console.log(one); // => undefined
    var one = 1;
    var one = 2;
```
    
```bash
    a(); // => 'bye'
    function a() {
        console.log('hi')
    }
    function a() {
        console.log('bye')
    }
```

### упражнение 2
```bash
    var favouriteFood = "grapes";

    var foodThoughts = function () {
        console.log("Original favourite food: " + favouriteFood); // => undefined

        var favouriteFood = "sushi";

        console.log("New favourite food: " + favouriteFood); // => 'sushi'
    };

    foodThoughts()
```
Под капотом:
```bash
    var favouriteFood = undefined;
    var foodThoughts = undefined;
    var favouriteFood = "grapes";

    var foodThoughts = function () {
        var favouriteFood = undefined;
        console.log("Original favourite food: " + favouriteFood); // => undefined

        var favouriteFood = "sushi";

        console.log("New favourite food: " + favouriteFood); // => 'sushi'
    };

    foodThoughts()
```
    
```bash
    var favouriteFood = "grapes";

    var foodThoughts = function () {
        console.log("Original favourite food: " + favouriteFood); // => grapes

        favouriteFood = "sushi"; если убрать var, то все будет нормально

        console.log("New favourite food: " + favouriteFood); // => 'sushi'
    };

    foodThoughts()
```

# Избегать в коде чтобы помоч js engine оптимизировать код

![Alt text](./image/avoid-in-code.png?raw=true "Title")


# Arguments 
    
```bash
    //arguments лучше избегать в коде
    function marry(person1, person2) {
    console.log(arguments)
    console.log(Array.from(arguments))
    return `${person1} is now married to ${person2}`
    }

    function marry2(...args) {
    console.log(args)
    return `${args[0]} is now married to ${args[1]}`
    }

    marry('Tim', 'Tina')
    marry2('Tim', 'Tina')
```

# Variable enviroment

 



