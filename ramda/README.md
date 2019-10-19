# RAMDA

##partial
```bash
    const multiply2 = (a, b) => a * b;
    const double = R.partial(multiply2, [2]);
    double(2); //=> 4

    const greet = (salutation, title, firstName, lastName) =>
    salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

    const sayHello = R.partial(greet, ['Hello']);
    const sayHelloToMs = R.partial(sayHello, ['Ms.']);
    sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
```

##reduce
```bash
    R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
    //          -               -10
    //         / \              / \
    //        -   4           -6   4
    //       / \              / \
    //      -   3   ==>     -3   3
    //     / \              / \
    //    -   2           -1   2
    //   / \              / \
    //  0   1            0   1
```

##prop
```bash
    R.prop('x', {x: 100, y: 20}); //=> 100
    R.prop('x', {}); //=> undefined
    R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4


    #R.map(meal => meal.calories),
    #R.map(R.prop('calories')), 
```

```bash
    R.sum([2,4,6,8,100,1]); //=> 121

    #R.reduce((acc, cur) => acc + cur, 0) 
    #R.sum
```
## merge
```bash
    R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 }); #//=> { 'name': 'fred', 'age': 40 }

    const withDefaults = R.merge({x: 0, y: 0});
    withDefaults({y: 2}); #//=> {x: 0, y: 2}
```

## append

```bash
    R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
    R.append('tests', []); //=> ['tests']
    R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
```