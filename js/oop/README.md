## OOP


```bash
    #// factory function make/create
    function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        atack() {
        return 'atack with ' + weapon
        }
    }
    }
    const sam = createElf('Sam', 'bow');
    const peter = createElf('Peter', 'bow');

    sam.atack()

    #если вызвать функцию 1000 раз то метод atack()  вызоветься 1000 раз
```

###Object.create
    ```bash
    const elfFunctions = {
    attack: function() {
        return 'atack with ' + this.weapon
    }
    }

    function createElf(name, weapon) {
    #//Object.create creates __proto__ link
    newElf = Object.create(elfFunctions) # // создант {} с прототипом attack() => newElf.__proto__ = attack()
    newElf.name = name;
    newElf.weapon = weapon
    return newElf
    }


    const sam = createElf('Sam', 'bow');
    const peter = createElf('Peter', 'bow');
    sam.attack()
```


###Constructor Functions
```bash
    function Elf(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    Elf.prototype.attack = function() { 
        return 'atack with ' + this.weapon
    }
    #// неправильно т.к this указывает на window   lexical scope
    Elf.prototype.attack = () => { 
        return 'atack with ' + this.weapon #// error
    }

    const sam = new Elf('Sam', 'bow');
    const peter = new Elf('Peter', 'bow');
    sam.attack()
```

## operator __new__
* - создает {}
* - добавляет свойства методы, заполняет (устанавливает конструктор)
* - присваивает this новосозданному объекту (piter, sam)
* - возвращает this


```bash
    function Elf(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    Elf.prototype.attack = function() { 
        return 'atack with ' + this.weapon
    }
    #1) bind
    Elf.prototype.build = function() { 
        function building(){
            return this.name + ' builds a house';
        }
        return building.bind(this)
    }
    #2) self
    Elf.prototype.build = function() { 
        const self = this;
        function building(){
            return self.name + ' builds a house';
        }
        return building()
    }
    #3) =>
    Elf.prototype.build = function() { 
        let aaa = () => {
          return 'build ' + this.name
        }
        return aaa()
    }


    const sam = new Elf('Sam', 'bow');
    const peter = new Elf('Peter', 'bow');
    sam.attack()
```



###class

```bash
    class Elf {
        constructor(name, weapon) {
            this.name = name;
            this.weapon = weapon;
        }
        attack() { #// если переместить метод в конструктор то метод будет вызываться столько раз сколко раз создаеться новый объект.
            return 'atack with ' + this.weapon
        }
    }

    const fiona = new Elf('Fiona', 'ninja stars');
    console.log(fiona instanceof Elf) // 
    const ben = new Elf('Ben', 'bow');
    fiona.attack()
```

### this - 4 Ways
```bash
    #// new binding
    function Person(name, age) {
        this.name = name;
        this.age =age;
        console.log(this);
    }

    const person1 = new Person('Xavier', 55)

    #//implicit binding
    const person = {
        name: 'Karen',
        age: 40,
        hi() {
            console.log('hi' + this.name)
        }
    }

    person.hi()

    #//explicit binding
    const person3 = {
        name: 'Karen',
        age: 40,
        hi: function() {
            console.log('hi' + this.setTimeout)
        }.bind(window)
    }

    person3.hi()

    #// arrow functions
    const person4 = {
    name: 'Karen',
    age: 40,
    hi: function() {
        var inner = () => {
        console.log('hi ' + this.name)
        }
        return inner()
    }
    }

    person4.hi()
```

```bash
    class Elf {
        constructor(name, weapon) {
            this.name = name;
            this.weapon = weapon;
        }
        attack() { 
            return 'atack with ' + this.weapon
        }
    }

    const fiona = new Elf('Fiona', 'ninja stars');
    const orge = {...fiona}
    orge.attack() #// => undefined
    #// orge.__proto__ // => {}   fiona.__proto__ // => Elf {}
```


```bash
    class Character {
        constructor(name, weapon) {
            this.name = name;
            this.weapon = weapon;
        }
        attack() {
            return 'atack with ' + this.weapon
        }
    }

    class Elf extends Character { 
        constructor(name, weapon, type) {
            #// console.log('what am i?', this); this gives an error
            super(name, weapon) 
            console.log('what am i?', this);
            this.type = type;
        }
    }

    class Ogre extends Character {
        constructor(name, weapon, color) {
            super(name, weapon);
            this.color = color;
        }
        makeFort() { // this is like extending our prototype.
            return 'strongest fort in the world made'
        }
    }

    const houseElf = new Elf('Dolby', 'cloth', 'house')
    const shrek = new Ogre('Shrek', 'club', 'green')
    shrek.makeFort()

    console.log(Orge.isPrototypeOf(shrek)) #// => false
    console.log(Orge.prototype.isPrototypeOf(shrek)) #// => true

```

### OOP
* -  Инкапсуляция - скрываем от других
* -  Абстракция - скрытие сложности от пользователей, создание простых интерфейсов 
* -  Наследование
* -  Полиморфизм - позможность вызвать объекты разными способами (переопределять методы у разных классов)


### пример полиморфизма attack() разней у двух объектов cat, volf
```bash
    class Animal {
        attack(){
            return 'rrrrrr'
        }
    }

    class Volf extends Animal {
        constructor(name){
          super();
          this.name = name;
        }
        attack(){
          console.log(this.name)
            return 'gaf '+this.name
        }
    }
    class Cat extends Animal {
        constructor(name){
          super();
          this.name = name;
        }
        attack(){
          console.log(this.name)
            return 'Maau '+this.name 
        }
    }

    const volf = new Volf('Vollff')
    const cat = new Volf('Catt')

    volf.attack()
    cat.attack()
```
