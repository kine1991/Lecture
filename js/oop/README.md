## OOP
    const elf = {

    }

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
console.log(fiona instanceof Elf) // 
const ben = new Elf('Ben', 'bow');
fiona.attack()
```




![Alt text](./image/code-execution-context.png?raw=true "Title")
